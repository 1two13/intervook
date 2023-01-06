import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import loginApi from '../../api/loginApi';
import { authSlice } from '../../redux-toolkit/slices/authSlice';
import Input from '../common/components/Input';

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginApi(email, password).then((result) => {
      if (result.is_login) {
        dispatch(authSlice.actions.login('tori'));
        navigate('/');
      } else navigate('/join');
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
            ? 'w-[260px] h-[45px] pl-[10px] mb-[26px] text-[16px] border-[0.7px] rounded-[7px] bg-deepGreen text-[white]'
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
