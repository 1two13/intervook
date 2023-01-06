import { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

function ShowImage() {
  const imgRef = useRef<HTMLInputElement>(null);
  const [showImages, setShowImages] = useState([] as any);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];

    if (!imageLists) return;

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 3) {
      imageUrlLists = imageUrlLists.slice(0, 3);
    }

    setShowImages(imageUrlLists);
  };

  const deleteImage = (id: number) => {
    setShowImages(showImages.filter((_: any, index: number) => index !== id));
  };

  return (
    <>
      <div className="flex justify-center items-center w-[100%] h-[140px] mt-[20px] outline-0 rounded-[5px] border-[1px] border-lightGray border-dashed">
        <button
          onClick={() => {
            imgRef.current?.click();
          }}
          className="flex justify-center items-center h-[45px] p-[10px] cursor-pointer bg-bgColor border-[1px] border-deepGray border-dashed rounded-[5px]"
        >
          <FontAwesomeIcon icon={faFolder} size="lg" className="mr-[5px]" />
          파일 선택 (최대 3개)
        </button>
        <input
          type="file"
          multiple
          ref={imgRef}
          onChange={onChange}
          accept="image/png, image/jpg, image/jpeg"
          className="hidden"
        />
      </div>

      <div className="flex mt-[5px]">
        {showImages.map((image: string, id: number) => (
          <div key={id} className="relative max-w-[25%] mr-[1%]">
            <div
              onClick={() => deleteImage(id)}
              className="flex justify-center items-center text-center absolute ml-[82%] mt-[2%] w-[16%] aspect-square rounded-[50%] text-[white] bg-[black] cursor-pointer"
            >
              X
            </div>

            <img
              src={image}
              alt={`${image}-${id}`}
              onClick={() => {
                imgRef.current?.click();
              }}
              className="aspect-square"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ShowImage;
