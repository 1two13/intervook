import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

function DropDownMenu() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);

  const moveToMyPage = () => {
    navigate("/myPage");
    // 드롭다운 메뉴 숨기기 (showMenu가 false로 변경됨)
    setShowMenu(!showMenu);
  };
  // console.log(showMenu);

  return (
    <>
      {/* showMenu가 true일 때 드롭다운 메뉴 보여주기 */}
      {showMenu && (
        <div className="bg-bgColor border-[1px] border-deepGray">
          <div className="flex h-[70px] bg-[white] pl-[10px] items-center">
            <img className="w-[30px] h-[30px] rounded-[50%] border-[1px] border-lightGray bg-lightGreen" />
            <div className="ml-[3px] cursor-pointer" onClick={moveToMyPage}>
              고토리
            </div>
          </div>

          <div className="h-[150px] pl-[10px] pt-[10px]">
            <div className="pb-[6px]">
              <FontAwesomeIcon
                size="lg"
                color="lightGreen"
                className="mr-[7px] cursor-pointer"
                icon={faHeart}
              />
              좋아요
            </div>
            <div>
              <FontAwesomeIcon
                size="lg"
                color="lightGreen"
                className="ml-[2px] mr-[10px] cursor-pointer"
                icon={faBookmark}
              />
              북마크
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
