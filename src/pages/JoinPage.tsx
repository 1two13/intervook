import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoginJoinBox from '../components/common/components/LoginJoinBox';
import H1 from '../components/common/components/H1';
import Name from '../components/join/Name';
import Email from '../components/join/Email';
import Password from '../components/join/Password';
import Button from '../components/join/Button';

function JoinPage() {
  const navigate = useNavigate();
  const selector = useSelector((state: any) => {
    return [state.join.isName, state.join.isEmail, state.join.isPassword];
  });
  const isValidate = selector.every((el) => el === true);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fetchUrl = `/api/auth/join?email=${selector[1]}&password=${selector[2]}&nickname=${selector[0]}`;
    fetch(fetchUrl, {
      method: 'POST',
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => console.log(res));

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
