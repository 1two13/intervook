function Button({ isValidate }: { isValidate: boolean }) {
  return (
    <button
      className={
        isValidate
          ? 'w-[45%] h-[100%] pl-[10px] mt-[16px] text-[16px] border-[0.7px] rounded-[7px] bg-deepGreen text-[white]'
          : 'w-[45%] h-[50px] pl-[10px] mt-[16px] text-[16px] border-[0.7px] rounded-[7px] bg-deepGray text-[white]'
      }
      disabled={!isValidate}
    >
      회원가입
    </button>
  );
}

export default Button;
