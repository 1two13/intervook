interface IInput {
  placeholder: string;
  name: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ placeholder, name, type, onChange }: IInput) {
  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={onChange}
      className="w-[260px] h-[45px] pl-[10px] mb-[26px] text-[13px] placeholder:text-deepGray border-[0.7px] rounded-[1px] border-deepGray"
    />
  );
}

export default Input;
