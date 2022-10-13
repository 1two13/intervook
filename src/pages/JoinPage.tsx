import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginNJoinBox from "../common/components/LoginNJoinBox";
import H1 from "../common/components/H1";
import Input from "../common/components/Input";
import Label from "../join/components/Label";
import Comments from "../join/components/Comments";

function JoinPage() {
  const navigate = useNavigate();
  // 이름, 이메일, 비밀번호 확인
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // 메세지 상태 저장
  const [nameMsg, setNameMsg] = useState<string>("");
  const [emailMsg, setEmailMsg] = useState<string>("");
  const [passwordMsg, setPasswordMsg] = useState<string>("");
  // 유효성
  const [isName, setIsName] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 7) {
      setNameMsg("2글자 이상 7글자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMsg("올바른 이름 형식입니다.");
      setIsName(true);
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setEmail(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      setEmailMsg("이메일 형식이 틀렸어요! 다시 확인해주세요.🥲");
      setIsEmail(false);
    } else {
      setEmailMsg("올바른 이메일 형식입니다.");
      setIsEmail(true);
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;
    setPassword(e.target.value);
    if (!passwordRegex.test(e.target.value)) {
      setPasswordMsg("영문, 숫자 포함 6자리 이상 입력해주세요.");
      setIsPassword(false);
    } else {
      setPasswordMsg("안전한 비밀번호 입니다.🙂");
      setIsPassword(true);
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 유효성이 모두 true인지 확인하기
    if (isName && isEmail && isPassword) {
      navigate("/");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <LoginNJoinBox>
        <H1 name={"회원가입"} />

        <form onSubmit={onSubmitHandler} className="flex flex-col">
          <Label name={"이름"} />
          <Input
            placeholder="프로필 이름"
            name="name"
            type="text"
            onChange={onChangeName}
          />
          {name.length > 0 ? <Comments message={nameMsg} /> : ""}

          <Label name={"이메일"} />
          <Input
            placeholder="example@gotori.com"
            name="email"
            type="text"
            onChange={onChangeEmail}
          />
          {email.length > 0 ? <Comments message={emailMsg} /> : ""}

          <Label name={"비밀번호"} />
          <Input
            placeholder="영문, 숫자 포함 6자 이상"
            name="password"
            type="password"
            onChange={onChangePassword}
          />
          {password.length > 0 ? <Comments message={passwordMsg} /> : ""}

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
        </form>
      </LoginNJoinBox>
    </div>
  );
}

export default JoinPage;
