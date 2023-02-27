function CardPage() {
  const link = () => {
    window.open('https://www.naver.com/', '_blank');
  };

  return (
    <div className="w-[70%] h-[100vh] m-auto px-[3%] pt-[2%] bg-lightGray/5 border-[1px] border-lightGray border-y-0">
      <div className="mb-[2%]">
        <div>작성자</div>
        <div className="w-[100%] h-[55px] justify-center outline-0 text-[28px] bg-lightGray/5 border-b-[1px] border-lightGray">
          제목
        </div>
        {/* writingPage에서 선택한 #프론트 또는 #백 태그 */}
        <div className="text-right text-deepGray">#태그</div>
      </div>

      <div className="mb-[1%] p-[1%]">작성된 글...</div>

      <div className="flex w-[100%] h-[60px] border-[1px] border-lightGray">
        <div className="h-[100px] p-[3%] text-lightGray">url</div>
      </div>
    </div>
  );
}

export default CardPage;
