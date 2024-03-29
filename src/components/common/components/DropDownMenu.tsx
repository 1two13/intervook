import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

import DropDownMenuIcon from './DropDownMenuIcon';

function DropDownMenu() {
  const imageUrl =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);

  const moveToMyPage = () => {
    navigate('/myPage');
    setShowMenu(!showMenu);
  };

  return (
    <>
      {showMenu && (
        <div className="bg-lightGray/10 border-[1px] border-deepGray">
          <div className="flex h-[70px] bg-[white] pl-[10px] items-center">
            <img src={imageUrl} className="w-[30px] h-[30px] rounded-[50%]" />
            <div className="ml-[3px] cursor-pointer" onClick={moveToMyPage}>
              고토리
            </div>
          </div>

          <div className="flex flex-col h-[150px] pl-[10px] pt-[10px]">
            <DropDownMenuIcon icon={faHeart} text={'좋아요'} />
            <DropDownMenuIcon icon={faBookmark} text={'북마크'} className={'ml-[2px]'} />
            <DropDownMenuIcon icon={faFolder} text={'저장한 게시물'} />
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
