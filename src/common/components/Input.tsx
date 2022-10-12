interface IInput {
  placeholder: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ placeholder, name, onChange }: IInput) {
  return (
    <input
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className="w-[260px] h-[45px] pl-[10px] mb-[26px] text-[13px] placeholder:text-deepGray border-[0.7px] rounded-[7px] border-deepGray"
    />
  );
}

export default Input;
