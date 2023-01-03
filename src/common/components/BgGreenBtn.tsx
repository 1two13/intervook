interface IBgGreenBtn {
  name: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function BgGreenBtn({ name, onClick }: IBgGreenBtn) {
  return (
    <button
      className="w-[8vw] h-[40px] rounded-[10px] bg-lightGreen text-[white]"
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default BgGreenBtn;
