import { useNavigate } from "react-router-dom";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Icons from "../../assets/Icons";

function Logged() {
  const navigate = useNavigate();

  const moveToMyPage = () => {
    navigate("/mypage");
  };

  return (
    <>
      <Icons icon={faHeart} />
      <Icons icon={faBookmark} />
      <Icons icon={faUser} onClick={moveToMyPage} />
    </>
  );
}

export default Logged;
