interface IButton {
  name: string;
}

function Button({ name }: IButton) {
  return (
    <div className="flex w-[81px] h-[36px] mr-[18px] justify-center items-center text-[14px] border-[2px] rounded-[80px] border-lightGray bg-deepGray/10">
      {name}
    </div>
  );
}

export default Button;
