import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import H1 from '../components/common/components/H1';
import Name from '../components/join/Name';
import Email from '../components/join/Email';
import Password from '../components/join/Password';
import Button from '../components/join/Button';
import CheckPassword from '../components/join/CheckPassword';

function JoinPage() {
  const navigate = useNavigate();
  const selector = useSelector((state: any) => {
    return [state.join.isName, state.join.isEmail, state.join.isPassword, state.join.isCorrect];
  });
  const isValidate = selector.every((el) => el === true);
  const email = useSelector((state: any) => state.join.email);
  const password = useSelector((state: any) => state.join.password);
  const nickname = useSelector((state: any) => state.join.name);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fetchUrl = `/api/auth/join?email=${email}&password=${password}&nickname=${nickname}`;
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
    <div className="flex flex-col h-screen mt-[3%] items-center">
      <H1 name={'회원가입'} />
      <div className="w-[30%] my-[1%] border-[1px] border-lightGray/30"></div>
      <form
        onSubmit={onSubmitHandler}
        className="w-[40%] h-[60%] flex flex-col items-center justify-around"
      >
        <Name />
        <Email />
        <Password />
        <CheckPassword />
        <Button isValidate={isValidate} />
      </form>
    </div>
  );
}

export default JoinPage;
