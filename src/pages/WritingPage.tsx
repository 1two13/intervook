import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { writingSlice } from '../redux-toolkit/slices/writingSlice';

import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import Buttons from '../components/writing/Buttons';
import Title from '../components/writing/Title';
import ShowLink from '../components/writing/ShowLink';
import Icon from '../components/writing/Icon';
import ShowImage from '../components/writing/ShowImage';
import Button from '../components/common/components/Button';

function WritingPage() {
  const [text, setText] = useState('');
  const [clicked, setClicked] = useState(0);
  const textarea = useRef(null);
  const dispatch = useDispatch();

  const showLink = () => {
    dispatch(writingSlice.actions.link(true));
  };
  const showImage = () => {
    dispatch(writingSlice.actions.image(true));
  };
  const isLink = useSelector((state: any) => {
    return state.writing.isLink;
  });
  const isImage = useSelector((state: any) => {
    return state.writing.isImage;
  });

  const resizeHeight = (
    textarea: React.RefObject<HTMLTextAreaElement>,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (textarea.current) {
      textarea.current.style.height = 'auto';
      textarea.current.style.height = textarea.current.scrollHeight + 'px';
      setText(e.target.value);
    }
  };
  const changeTag = (index: number) => {
    setClicked(index);
  };

  return (
    <div className="w-[70%] m-auto border-y-0 border-[1px] border-lightGray">
      <Buttons />

      <div className="pt-[5%] pl-[7%] pb-[3%]">
        <Icon icon={faLink} onClick={showLink} />
        <Icon icon={faImage} onClick={showImage} />
      </div>

      <div className="w-[80%] h-[100vh] m-auto">
        <Title />
        <div className="flex my-[1%] text-deepGray">
          <Button name="#프론트" onClick={() => changeTag(1)} clicked={clicked === 1}></Button>
          <Button name="#백" onClick={() => changeTag(2)} clicked={clicked === 2}></Button>
        </div>
        {isLink && <ShowLink />}
        {isImage && <ShowImage />}
        <textarea
          className="w-full my-[1%] p-[1%] focus:outline-none placeholder:text-deepGray"
          placeholder="생각을 공유해주세요."
          ref={textarea}
          value={text}
          onChange={(e) => resizeHeight(textarea, e)}
        ></textarea>
      </div>
    </div>
  );
}

export default WritingPage;
