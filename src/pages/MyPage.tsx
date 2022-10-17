import { useRef, useState } from "react";

import BgGreenBtn from "../common/components/BgGreenBtn";
import BgWhiteBtn from "../common/components/BgWhiteBtn";

function MyPage() {
  const [imageUrl, setImageUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const imgRef = useRef<HTMLInputElement>(null);

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 선택한 파일 정보
    // const files = (e.currentTarget.files as FileList)[0];
    const files = (e.target.files as FileList)[0];
    const reader = new FileReader();
    // console.log(files, reader);

    if (files === undefined) return;

    reader.readAsDataURL(files);
    reader.onload = () => {
      setImageUrl(reader.result as string);
    };
  };

  return (
    <div>
      <div className="flex h-[60px] items-center text-[25px] bg-lightGreen/50">
        <h1 className="flex w-[80%] m-auto items-center justify-between ">
          프로필 설정
        </h1>
      </div>

      <div className="flex flex-col mt-[70px] justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <label className="w-[25vh] h-[25vh] rounded-[50%] border-[1px] border-lightGray cursor-pointer">
            <img
              src={imageUrl}
              onClick={() => {
                imgRef.current?.click();
              }}
              className="w-[100%] aspect-square rounded-[50%]"
            />
          </label>

          <input
            type="file"
            ref={imgRef}
            onChange={onChangeImage}
            accept="image/png, image/jpg, image/jpeg"
            className="hidden"
          />
        </div>

        <input
          placeholder="고토리"
          className="w-[20%] py-[3px] mt-[15px] mb-[60px] text-center text-[black] bg-lightGray/50 focus:outline-none"
        />

        <div className="w-[50%]">
          <div className="text-[18px]">자기소개</div>
          <input
            placeholder="프론트엔드 개발자가 되고 싶은 고토리입니다!"
            className="flex w-[100%] h-[140px] mb-[120px] p-[15px] justify-between text-[black] shadow-md bg-lightGray/10 focus:outline-none"
          />
        </div>
      </div>

      <div className="float-right mr-[23.5%] mb-[60px]">
        <BgGreenBtn name={"저장하기"} />
        <BgWhiteBtn name={"탈퇴하기"} />
      </div>
    </div>
  );
}

export default MyPage;
