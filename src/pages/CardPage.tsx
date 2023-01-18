function CardPage() {
  const link = () => {
    window.open('https://www.naver.com/', '_blank');
  };

  return (
    <div className="w-[70%] m-auto px-[3%] pt-[2%] bg-[white] border-[1px] border-lightGray">
      <div className="mb-[2%]">
        <div>작성자</div>
        <div className="w-[100%] h-[55px] justify-center outline-0 text-[28px] bg-[white] border-b-[1px] border-lightGray">
          제목
        </div>
        <div className="text-right text-deepGray">#태그 #태그 #태그</div>
      </div>

      <div className="h-[100vh] mb-[1%]">작성된 글...</div>
      <div onClick={link} className="w-[100%] mb-[5%] rounded-[5%] cursor-pointer bg-bgColor">
        <div className="h-[100px] p-[3%]">제목</div>
      </div>
    </div>
  );
}

export default CardPage;