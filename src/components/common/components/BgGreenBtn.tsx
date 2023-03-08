interface IBgGreenBtn {
  name: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

function BgGreenBtn({ name, onClick, className }: IBgGreenBtn) {
  return (
    <button
      className={`w-[8vw] h-[40px] rounded-[10px] bg-deepGreen text-[white] ${className} onClick={onClick}`}
    >
      {name}
    </button>
  );
}

export default BgGreenBtn;
