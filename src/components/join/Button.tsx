import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Button() {
  const selector = useSelector((state: any) => {
    return [state.join.isName, state.join.isEmail, state.join.isPassword];
  });
  const isValidate = selector.every((el) => el === true);
  const navigate = useNavigate();
  const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isValidate) navigate('/');
  };

  return (
    <button
      className={
        isValidate
          ? 'w-[260px] h-[50px] pl-[10px] mt-[16px] text-[16px] border-[0.7px] rounded-[7px] bg-deepGreen text-[white]'
          : 'w-[260px] h-[50px] pl-[10px] mt-[16px] text-[16px] border-[0.7px] rounded-[7px] bg-deepGray text-[white]'
      }
      disabled={!isValidate}
      onClick={onSubmitHandler}
    >
      회원가입
    </button>
  );
}

export default Button;
