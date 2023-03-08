function Buttons() {
  return (
    <div className="sticky top-[8%] z-[999] flex w-[100%] pl-[78%] py-[2%] border-b-[1px] border-lightGray bg-[#FDFDFD]">
      <button className="w-[6vw] h-[40px] mx-[5%] border-[1px] rounded-[10px] border-lightGray bg-[white]">
        보관
      </button>
      <button className="w-[6vw] h-[40px] rounded-[10px] bg-deepGreen text-[white]">완료</button>
    </div>
  );
}

export default Buttons;
