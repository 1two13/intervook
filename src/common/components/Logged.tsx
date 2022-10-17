import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import Icons from "../../assets/Icons";
import IsHover from "./IsHover";

function Logged() {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const moveToMyPage = () => {
    navigate("/mypage");
  };

  return (
    <div className="flex relative">
      <Icons icon={faHeart} />
      <Icons icon={faBookmark} />

      <div
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseOut={() => {
          setIsHover(false);
        }}
      >
        <Icons icon={faUser} onClick={moveToMyPage} />
        {/* isHover가 true일 때만 IsHover 컴포넌트 렌더링 */}
        {isHover && <IsHover />}
      </div>
    </div>
  );
}

export default Logged;
