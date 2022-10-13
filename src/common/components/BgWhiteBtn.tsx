interface IBgWhiteBtn {
  name: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function BgWhiteBtn({ name, onClick }: IBgWhiteBtn) {
  return (
    <button
      className="w-[100px] h-[40px] mx-[20px] border-[1px] rounded-[10px] border-deepGray"
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default BgWhiteBtn;
