function Title() {
  return (
    <input
      placeholder="제목을 입력해주세요."
      maxLength={50}
      className="w-[100%] h-[55px] justify-center pl-[10px] outline-0 text-[28px] bg-[white] border-b-[1px] border-lightGray"
    />
  );
}

export default Title;
