import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function WritingCard() {
  const navigate = useNavigate();
  const moveToCardPage = () => {
    navigate('/card');
  };
  const [isLike, setIsLike] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const [count, setCount] = useState(0);
  const clickLike = () => {
    setIsLike(!isLike);
    if (!isLike) setCount((count) => (count += 1));
    else setCount((count) => (count -= 1));
  };
  const clickBookmark = () => setIsBookmark(!isBookmark);

  return (
    <div className="flex h-[100%] pt-[2%] justify-between text-deepGray shadow-md bg-lightGray/10 cursor-pointer">
      <div onClick={moveToCardPage} className="w-[90%]">
        <div className="ml-[15px] text-[12px]">
          <div className="text-[24px] text-[black]">제목</div>
          <div className="">작성자</div>

          <div className="flex my-[5%] text-[14px]">#태그</div>
        </div>
      </div>

      <div className="flex mr-[10px]">
        <div className="mr-[10px] text-center">
          <button onClick={clickLike}>
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="2x"
              className={isLike ? 'text-deepGreen' : 'text-lightGray'}
            />
          </button>
          <div className="pr-[5px] text-[8px]">{count}</div>
        </div>

        <button onClick={clickBookmark} className="flex pt-[2px]">
          <FontAwesomeIcon
            icon={faBookmark}
            size="2x"
            className={isBookmark ? 'text-deepGreen' : 'text-lightGray'}
          />
        </button>
      </div>
    </div>
  );
}

export default WritingCard;
