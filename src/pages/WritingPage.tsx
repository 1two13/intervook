import { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";

import Icon from "../writing/components/Icon";
import Buttons from "../writing/components/Buttons";

function WritingPage() {
  const [linkClicked, setLinkClicked] = useState(false);
  const [imgClicked, setImgClicked] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [fileSelector, setFileSelector] = useState(true);
  const imgRef = useRef<HTMLInputElement>(null);

  const showLink = () => {
    setLinkClicked(!linkClicked);
  };
  const showImage = () => {
    setImgClicked(!imgClicked);
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 선택한 파일 정보
    // const files = (e.currentTarget.files as FileList)[0];
    const files = (e.target.files as FileList)[0];
    const reader = new FileReader();
    // console.log(files, reader);
    console.log(files);

    if (files === undefined) return;

    reader.readAsDataURL(files);
    reader.onload = () => {
      setImageUrl(reader.result as string);
    };
  };

  const deleteImg = () => {
    setImageUrl("");
  };

  return (
    <div className="w-[70%] m-auto bg-[white] border-[1px] border-lightGray">
      <Buttons />

      <div className="pt-[5%] pl-[7%] pb-[3%]">
        <Icon icon={faLink} onClick={showLink} />
        <Icon icon={faImage} onClick={showImage} />
      </div>

      <div className="w-[80%] m-auto">
        <input
          placeholder="제목을 입력해주세요."
          className="w-[100%] h-[55px] justify-center pl-[10px] outline-0 text-[28px] bg-[white] border-b-[1px] border-lightGray"
        />

        {/* 링크 아이콘 클릭했을 때 보여지는 UI */}
        {linkClicked && (
          <input
            placeholder="https://"
            className="w-[100%] h-[60px] mt-[20px] pl-[10px] outline-0 rounded-[5px] border-[1px] border-lightGray"
          />
        )}

        {/* 이미지 아이콘 클릭했을 때 보여지는 UI */}
        {imgClicked && (
          <div className="flex justify-center items-center w-[100%] h-[140px] mt-[20px] outline-0 rounded-[5px] border-[1px] border-lightGray border-dashed">
            <button
              onClick={() => {
                imgRef.current?.click();
                setFileSelector(fileSelector);
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
        )}

        {/* 파일 선택 버튼을 클릭했을 때 보여지는 UI */}
        {imgClicked && fileSelector && imageUrl !== "" && (
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
