import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

function DropDownMenu() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);

  const moveToMyPage = () => {
    navigate('/myPage');
    setShowMenu(!showMenu);
  };

  return (
    <>
      {showMenu && (
        <div className="bg-bgColor border-[1px] border-deepGray">
          <div className="flex h-[70px] bg-[white] pl-[10px] items-center">
            <img className="w-[30px] h-[30px] rounded-[50%] border-[1px] border-lightGray bg-deepGray" />
            <div className="ml-[3px] cursor-pointer" onClick={moveToMyPage}>
              고토리
            </div>
          </div>

          <div className="flex flex-col h-[150px] pl-[10px] pt-[10px]">
            <div className="pb-[6px]">
              <FontAwesomeIcon
                size="lg"
                className="mr-[7px] cursor-pointer text-deepGreen"
                icon={faHeart}
              />
              좋아요
            </div>
            <div className="pb-[6px]">
              <FontAwesomeIcon
                size="lg"
                className="ml-[2px] mr-[10px] cursor-pointer text-deepGreen"
                icon={faBookmark}
              />
              북마크
            </div>
            <div>
              <FontAwesomeIcon
                size="lg"
                className="mr-[7px] cursor-pointer text-deepGreen"
                icon={faFolder}
              />
              저장한 게시물
            </div>
          </div>

          <button className="float-right mt-[-19px] pb-[1px] pr-[3px] text-[12px] text-deepGray">
            로그아웃
          </button>
        </div>
      )}
    </>
  );
}

export default DropDownMenu;
