interface IInput {
  placeholder: string;
}

function Input({ placeholder }: IInput) {
  return (
    <input
      placeholder={placeholder}
      className="w-[260px] h-[45px] pl-[10px] mb-[26px] text-[13px] placeholder:text-deepGray border-[0.7px] rounded-[7px] border-deepGray"
    />
  );
}

export default Input;
