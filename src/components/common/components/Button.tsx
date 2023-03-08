interface IButton {
  name: string;
  className?: string;
  onClick?: any;
  clicked?: boolean;
}

function Button({ name, className, onClick, clicked }: IButton) {
  return (
    <div
      className={`flex w-[81px] h-[36px] mr-[1%] pb-[1px] items-center justify-center cursor-pointer text-[14px] border-[2px] rounded-[80px] border-lightGray 
      ${className} ${
        clicked ? 'border-deepGreen bg-deepGreen/10 text-deepGreen font-semibold' : 'bg-[white]'
      }`}
      onClick={onClick}
    >
      {name}
    </div>
  );
}
export default Button;
