import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import Card from '../common/components/Card';

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
    <Card>
      <div onClick={moveToCardPage} className="w-[90%]">
        <div className="ml-[15px] text-[12px]">
          <div className="mb-[-9px]">작성자</div>
          <div className="text-[24px] text-[black]">제목</div>
          <div className="mb-[-5px] mt-[-9px]">글 미리보기</div>
          <div>링크</div>

          <div className="flex my-[14px] text-[14px]">
            <div>#태그</div>
            <div>#태그</div>
            <div>#태그</div>
          </div>
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
    </Card>
  );
}

export default WritingCard;
