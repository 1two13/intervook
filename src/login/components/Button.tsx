interface IButton {
  name: string;
}

function Button({ name }: IButton) {
  // 추후에 이미지로 대체할 예정
  return (
    <button className="w-[49px] h-[45px] mt-[10px] text-[13px] placeholder:text-deepGray border-[0.7px] rounded-[7px] border-deepGray">
      {name}
    </button>
  );
}

export default Button;
