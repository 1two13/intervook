import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginNJoinBox from '../common/components/LoginNJoinBox';
import H1 from '../common/components/H1';
import Name from '../join/components/Name';
import Email from '../join/components/Email';
import Password from '../join/components/Password';
import Button from '../join/components/Button';

function JoinPage() {
  const navigate = useNavigate();

  const [isName, setIsName] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 유효성이 모두 true인지 확인하기
    if (isName && isEmail && isPassword) {
      navigate('/');
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <LoginNJoinBox>
        <H1 name={'회원가입'} />

        <form onSubmit={onSubmitHandler} className="flex flex-col">
          <Name />
          <Email />
          <Password />
          <Button />
        </form>
      </LoginNJoinBox>
    </div>
  );
}

export default JoinPage;
