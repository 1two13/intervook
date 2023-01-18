import BgGreenBtn from "../../common/components/BgGreenBtn";
import BgWhiteBtn from "../../common/components/BgWhiteBtn";

function Buttons() {
  return (
    <div className="float-right mr-[23.5%] mb-[60px]">
      <BgGreenBtn name={"저장하기"} />
      <BgWhiteBtn name={"탈퇴하기"} />
    </div>
  );
}

export default Buttons;
