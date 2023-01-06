import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

import { writingSlice } from '../redux-toolkit/slices';

function ShowImage() {
  const imgRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = (e.target.files as FileList)[0];
    const reader = new FileReader();
    console.log(files);

    if (files === undefined) return;

    reader.readAsDataURL(files);
    reader.onload = () => {
      dispatch(writingSlice.actions.imageUrl(reader.result as string));
    };
  };

  return (
    <div className="flex justify-center items-center w-[100%] h-[140px] mt-[20px] outline-0 rounded-[5px] border-[1px] border-lightGray border-dashed">
      <button
        onClick={() => {
          imgRef.current?.click();
          dispatch(writingSlice.actions.selected(true));
        }}
        className="flex justify-center items-center h-[45px] p-[10px] cursor-pointer bg-bgColor border-[1px] border-deepGray border-dashed rounded-[5px]"
      >
        <FontAwesomeIcon icon={faFolder} size="lg" className="mr-[5px]" />
        파일 선택
      </button>

      <input
        type="file"
        multiple
        ref={imgRef}
        onChange={onChangeImage}
        accept="image/png, image/jpg, image/jpeg"
        className="hidden"
      />
    </div>
  );
}

export default ShowImage;
