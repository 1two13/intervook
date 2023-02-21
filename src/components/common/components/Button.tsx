interface IButton {
  name: string;
  className?: string;
}

function Button({ name, className }: IButton) {
  return (
    <div
      className={`flex w-[81px] h-[36px] mr-[18px] pb-[1px] items-center justify-center cursor-pointer text-[14px] border-[2px] rounded-[80px] border-lightGray bg-lightGray/5 ${className}`}
    >
      {name}
    </div>
  );
}

export default Button;
