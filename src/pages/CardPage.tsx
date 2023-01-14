function CardPage() {
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
      <div>
        링크
        <link href="https://www.naver.com/" />
      </div>
    </div>
  );
}

export default CardPage;
