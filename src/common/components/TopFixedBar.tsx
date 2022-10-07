import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function TopFixedBar() {
  return (
    <div className="sticky top-0 h-[75px] bg-[white]">
      <div className="flex w-[80%] h-[75px] m-auto items-center justify-between">
        <div className="text-[36px]">고토리북</div>

        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="2x"
            color="lightGreen"
            className="mr-[20px]"
          />
          <button className="w-[100px] h-[40px] mr-[20px] border-[1px] rounded-[10px] border-deepGray">
            로그인
          </button>
          <button className="w-[100px] h-[40px] rounded-[10px] bg-lightGreen text-[white]">
            회원가입
          </button>
        </div>
      </div>

      <div className="border-b-[1px] border-b-[#dbdbdb]"></div>
    </div>
  );
}

export default TopFixedBar;
