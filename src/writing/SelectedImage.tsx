import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { writingSlice } from '../redux-toolkit/slices';

function SelectedImage() {
  const dispatch = useDispatch();
  const imgRef = useRef<HTMLInputElement>(null);

  const deleteImg = () => {
    dispatch(writingSlice.actions.imageUrl(''));
  };
  const imageUrl = useSelector((state: any) => {
    return state.writing.imageUrl;
  });

  return (
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
  );
}

export default SelectedImage;
