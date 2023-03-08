function CardPage() {
  const link = () => {
    window.open('https://www.naver.com/', '_blank');
  };

  return (
    <div className="w-[70%] h-[100vh] m-auto px-[3%] pt-[2%] border-[1px] border-lightGray border-y-0">
      <div className="mb-[2%]">
        <div>작성자</div>
        <div className="w-[100%] h-[55px] justify-center outline-0 text-[28px] border-b-[1px] border-lightGray">
          제목
        </div>
        {/* writingPage에서 선택한 #프론트 또는 #백 태그 */}
        <div className="text-right">#태그</div>
      </div>

      <div className="mb-[1%] py-[1%]">작성된 글...</div>
      <div className="flex w-[100%] h-[60px] items-center px-[1%] border-[1px] border-lightGray bg-[white]">
        url
      </div>
    </div>
  );
}

export default CardPage;
