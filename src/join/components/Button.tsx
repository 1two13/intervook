import { useState } from "react";

function Button() {
  // 유효성
  const [isName, setIsName] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  return (
    <button
      className={
        isName && isEmail && isPassword
          ? "w-[260px] h-[50px] pl-[10px] mt-[16px] text-[16px] border-[0.7px] rounded-[7px] bg-lightGreen text-[white]"
          : "w-[260px] h-[50px] pl-[10px] mt-[16px] text-[16px] border-[0.7px] rounded-[7px] bg-deepGray text-[white]"
      }
      disabled={!(isName && isEmail && isPassword)}
    >
      회원가입
    </button>
  );
}

export default Button;
