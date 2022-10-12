import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Icons from "../../assets/Icons";

function Logged() {
  return (
    <>
      <Icons icon={faHeart} />
      <Icons icon={faBookmark} />
      <Icons icon={faUser} />
    </>
  );
}

export default Logged;
