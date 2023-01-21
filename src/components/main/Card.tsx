import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function Card() {
  const navigate = useNavigate();
  const moveToCardPage = () => {
    navigate('/card');
  };
  const [isLike, setIsLike] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const clickLike = () => setIsLike(!isLike);
  const clickBookmark = () => setIsBookmark(!isBookmark);

  return (
    <div className="flex mt-[18px] mb-[30px] pt-[5px] justify-between text-deepGray shadow-md bg-[white] cursor-pointer">
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
              className={isLike ? 'text-deepGreen' : ''}
            />
          </button>
          <div className="text-[8px]">좋아요 7</div>
        </div>

        <button onClick={clickBookmark} className="flex pt-[2px]">
          <FontAwesomeIcon
            icon={faBookmark}
            size="2x"
            className={isBookmark ? 'text-deepGreen' : ''}
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
