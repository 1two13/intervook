import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

import BgGreenBtn from "../common/components/BgGreenBtn";
import BgWhiteBtn from "../common/components/BgWhiteBtn";
import Button from "../writing/components/Button";

function WritingPage() {
  return (
    <div className="w-[70%] m-auto bg-[white] border-[1px] border-lightGray">
      <div className="flex w-[100%] pl-[68%] py-[2%] border-b-[1px] border-lightGray">
        <BgWhiteBtn name={"보관"} />
        <BgGreenBtn name={"완료"} />
      </div>

      <div className="pt-[5%] pl-[7%] pb-[3%]">
        <Button icon={faLink} />
        <Button icon={faImage} />
      </div>

      <div className="w-[80%] m-auto">
        <input
          placeholder="제목을 입력해주세요."
          className="w-[100%] h-[55px] justify-center pl-[10px] outline-0 text-[28px]  bg-[white] border-b-[1px] border-lightGray"
        />

        <textarea
          placeholder="생각을 공유해주세요."
          className="w-[100%] h-[100vh] pl-[10px] pt-[10px] outline-0 text-[18px] bg-[white]"
        />
      </div>
    </div>
  );
}

export default WritingPage;
