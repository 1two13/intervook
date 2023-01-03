import { useState } from 'react';

import LoginNJoinBox from '../common/components/LoginNJoinBox';
import H1 from '../common/components/H1';
import Name from '../join/Name';
import Email from '../join/Email';
import Password from '../join/Password';
import Button from '../join/Button';

function JoinPage() {
  const [isName, setIsName] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  return (
    <div className="flex h-screen justify-center items-center">
      <LoginNJoinBox>
        <H1 name={'회원가입'} />

        <form className="flex flex-col">
          <Name setIsName={setIsName} />
          <Email setIsEmail={setIsEmail} />
          <Password setIsPassword={setIsPassword} />
          <Button isCorrect={[isName, isEmail, isPassword]} />
        </form>
      </LoginNJoinBox>
    </div>
  );
}

export default JoinPage;
