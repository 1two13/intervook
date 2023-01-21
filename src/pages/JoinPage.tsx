import LoginJoinBox from '../components/common/components/LoginJoinBox';
import H1 from '../components/common/components/H1';
import Name from '../components/join/Name';
import Email from '../components/join/Email';
import Password from '../components/join/Password';
import Button from '../components/join/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function JoinPage() {
  const navigate = useNavigate();
  const selector = useSelector((state: any) => {
    return [state.join.isName, state.join.isEmail, state.join.isPassword];
  });
  const isValidate = selector.every((el) => el === true);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidate) navigate('/');
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <LoginJoinBox>
        <H1 name={'회원가입'} />

        <form onSubmit={onSubmitHandler} className="flex flex-col">
          <Name />
          <Email />
          <Password />
          <Button isValidate={isValidate} />
        </form>
      </LoginJoinBox>
    </div>
  );
}

export default JoinPage;
