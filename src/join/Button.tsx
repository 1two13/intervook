import { useNavigate } from 'react-router-dom';

function Button({ isCorrect }: { isCorrect: Array<boolean> }) {
  const truthy = isCorrect.every((el) => el === true);

  const navigate = useNavigate();
  const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (truthy) navigate('/');
  };

  return (
    <button
      className={
        truthy
          ? 'w-[260px] h-[50px] pl-[10px] mt-[16px] text-[16px] border-[0.7px] rounded-[7px] bg-lightGreen text-[white]'
          : 'w-[260px] h-[50px] pl-[10px] mt-[16px] text-[16px] border-[0.7px] rounded-[7px] bg-deepGray text-[white]'
      }
      disabled={!truthy}
      onClick={onSubmitHandler}
    >
      회원가입
    </button>
  );
}

export default Button;
