import { useNavigate } from "react-router-dom";

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
      <button
        className="w-[100px] h-[40px] mx-[20px] border-[1px] rounded-[10px] border-deepGray"
        onClick={moveToLoginPage}
      >
        로그인
      </button>
      <button
        className="w-[100px] h-[40px] rounded-[10px] bg-lightGreen text-[white]"
        onClick={moveToJoinPage}
      >
        회원가입
      </button>
    </>
  );
}

export default UnLogged;
