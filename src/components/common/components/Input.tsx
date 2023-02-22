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
      className="w-[100%] h-[45%] pl-[10px] text-[13px] placeholder:text-deepGray border-[0.7px] rounded-[7px] border-lightGray/10 bg-lightGray/10 shadow"
    />
  );
}

export default Input;
