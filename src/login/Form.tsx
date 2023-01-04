import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import loginApi from '../api/loginApi';
import { authSlice } from '../redux-toolkit/slices';
import Input from '../common/components/Input';

function Form() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // 유효성
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const navigate = useNavigate();
  // action 함수 가져오기, state 값 변경시킬 때
  const dispatch = useDispatch();
  // 상태 조회하기
  const state = useSelector((state: any) => state);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginApi(email, password).then((result) => {
      if (result.is_login) {
        // 성공했다고 가정
        dispatch(authSlice.actions.login('tori'));
        navigate('/');
        // console.log(state);
      } else {
        // 실패
        navigate('/join');
      }
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col">
      <Input
        placeholder="이메일"
        name="email"
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
          setIsEmail(true);
        }}
      />
      <Input
        placeholder="비밀번호"
        name="password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
          setIsPassword(true);
        }}
      />
      <button
        className={
          isEmail && isPassword
            ? 'w-[260px] h-[45px] pl-[10px] mb-[26px] text-[16px] border-[0.7px] rounded-[7px] bg-lightGreen text-[white]'
            : 'w-[260px] h-[45px] pl-[10px] mb-[26px] text-[16px] border-[0.7px] rounded-[7px] bg-deepGray text-[white]'
        }
        disabled={!(isEmail && isPassword)}
      >
        로그인
      </button>
    </form>
  );
}

export default Form;
