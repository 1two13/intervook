import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Hr from "../login/components/Hr";
import Input from "../common/components/Input";
import Button from "../login/components/Button";
import H1 from "../common/components/H1";
import LoginNJoinBox from "../common/components/LoginNJoinBox";

import * as actions from "../actions/authActions";
import loginApi from "../api/loginApi";
import { RootState } from "../reducers";

function LoginPage() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  // action 함수 가져오기, state 값 변경시킬 때
  const dispatch = useDispatch();
  // 상태 조회하기
  const state = useSelector((state: RootState) => state);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginApi(id, password).then((result) => {
      if (result.is_login) {
        // 성공했다고 가정
        dispatch(actions.login(1, "tori"));
        navigate("/");
        // console.log(state);
      } else {
        // 실패
        navigate("/join");
      }
    });
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <LoginNJoinBox>
        <H1 name={"고토리북"} />

        <form onSubmit={onSubmitHandler} className="flex flex-col">
          <Input
            placeholder="이메일"
            name="id"
            type="text"
            onChange={(e) => setId(e.target.value)}
          />
          <Input
            placeholder="비밀번호"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-[260px] h-[45px] pl-[10px] mb-[26px] text-[16px] border-[0.7px] rounded-[7px] bg-lightGreen text-[white]">
            로그인
          </button>
        </form>

        <div className="w-[100%] flex items-center justify-center">
          <Hr />
          <div className="text-[14px] px-[5px] text-deepGray text-center">
            간편 로그인
          </div>
          <Hr />
        </div>

        <div className="flex w-[100%] justify-between">
          <Button name={"깃"} />
          <Button name={"구"} />
          <Button name={"카"} />
        </div>
      </LoginNJoinBox>
    </div>
  );
}

export default LoginPage;
