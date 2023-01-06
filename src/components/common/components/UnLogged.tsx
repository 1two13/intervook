import { useNavigate } from "react-router-dom";
import BgGreenBtn from "./BgGreenBtn";
import BgWhiteBtn from "./BgWhiteBtn";

function UnLogged() {
  const navigate = useNavigate();
  const moveToLoginPage = () => {
    navigate("/login");
  };
  const moveToJoinPage = () => {
    navigate("/join");
  };

  return (
    <>
      <BgWhiteBtn name={"로그인"} onClick={moveToLoginPage} />
      <BgGreenBtn name={"회원가입"} onClick={moveToJoinPage} />
    </>
  );
}

export default UnLogged;
