import { useRef, useState } from 'react';

function Introduction() {
  const MAX_LENGTH = 200;
  const [text, setText] = useState('');
  const textarea = useRef(null);

  const resizeHeight = (
    textarea: React.RefObject<HTMLTextAreaElement>,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (textarea.current) {
      textarea.current.style.height = 'auto';
      textarea.current.style.height = textarea.current.scrollHeight + 'px';
      setText(e.target.value.slice(0, MAX_LENGTH));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[50%]">
        <div className="flex justify-between">
          <div className="text-[18px]">자기소개</div>
          <div>
            ({text.length}/{MAX_LENGTH})
          </div>
        </div>

        <textarea
          className="flex w-full mb-[11%] p-[2%] focus:outline-none placeholder:text-deepGray shadow-md bg-lightGray/10"
          placeholder="프론트엔드 개발자가 되고 싶은 고주디입니다!"
          ref={textarea}
          value={text}
          onChange={(e) => resizeHeight(textarea, e)}
        ></textarea>
      </div>
    </div>
  );
}

export default Introduction;
