import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { writingSlice } from '../redux-toolkit/slices';

import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import Buttons from '../writing/Buttons';
import Title from '../writing/Title';
import ShowLink from '../writing/ShowLink';
import Icon from '../writing/Icon';
import ShowImage from '../writing/ShowImage';

function WritingPage() {
  const imgRef = useRef<HTMLInputElement>(null);

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
  const isSelected = useSelector((state: any) => {
    return state.writing.isSelected;
  });
  const imageUrl = useSelector((state: any) => {
    return state.writing.imageUrl;
  });
  const deleteImg = () => {
    dispatch(writingSlice.actions.imageUrl(''));
  };

  return (
    <div className="w-[70%] m-auto bg-[white] border-[1px] border-lightGray">
      <Buttons />

      <div className="pt-[5%] pl-[7%] pb-[3%]">
        <Icon icon={faLink} onClick={showLink} />
        <Icon icon={faImage} onClick={showImage} />
      </div>

      <div className="w-[80%] m-auto">
        <Title />
        {isLink && <ShowLink />}
        {isImage && <ShowImage />}

        {isImage && isSelected && imageUrl !== '' && (
          <div className="relative mt-[20px]">
            <div
              onClick={deleteImg}
              className="flex justify-center items-center text-center absolute ml-[22%] mt-[-1%] w-[4%] aspect-square rounded-[50%] text-[white] bg-[black] cursor-pointer"
            >
              X
            </div>
            <img
              src={imageUrl}
              onClick={() => {
                imgRef.current?.click();
              }}
              className="w-[25%] aspect-square"
            />
          </div>
        )}
        <textarea
          placeholder="생각을 공유해주세요."
          className="w-[100%] h-[100vh] !important pl-[10px] pt-[10px] outline-0 text-[18px] resize-none"
        />
      </div>
    </div>
  );
}

export default WritingPage;
