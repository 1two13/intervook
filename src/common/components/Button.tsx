interface IButton {
  name: string;
}

// 메인 페이지의 최신 순, 이름 순과 같은 버튼들
function Button({ name }: IButton) {
  return (
    <div className="flex w-[81px] h-[36px] mr-[18px] justify-center items-center text-[14px] border-[2px] rounded-[80px] border-lightGray bg-deepGray/10">
      {name}
    </div>
  );
}

export default Button;
