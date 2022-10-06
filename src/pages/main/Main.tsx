import React from "react";

function Main() {
  return (
    <div className="bg-stone-200 m-0 m-auto w-[80%]">
      <div className="bg-[yellow] m-0 m-auto w-[70%]">
        <input placeholder="생각을 공유해주세요!"></input>
        <button>퀴즈-&gt;</button>
      </div>

      <div>
        <button>최신 순</button>
        <button>이름 순</button>
        <button>좋아요 순</button>
        <button>북마크 순</button>
      </div>

      <div>
        <div>작성자</div>
        <div>제목</div>
        <div>글 미리보기</div>
        <div>링크</div>
        <div>태그</div>

        <div>
          <div>
            <button>좋아요</button>
            <div>좋아요 7</div>
          </div>
          <button>북마크</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
