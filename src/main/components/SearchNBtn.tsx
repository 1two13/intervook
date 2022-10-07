import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function SearchNBtn() {
  return (
    <div className="w-[48%] h-[60px] m-0 m-auto mt-[30px] mb-[50px]">
      <input
        placeholder="생각을 공유해주세요!"
        className="w-[75%] h-[100%] pl-[25px] border-[2px] rounded-[10px] border-lightGray"
      ></input>
      <button className="w-[20%] h-[100%] ml-[5%] border-[2px] rounded-[80px] border-lightGreen bg-lightGreen/20">
        퀴즈
        <FontAwesomeIcon icon={faArrowRight} className="pl-[5px]" />
      </button>
    </div>
  );
}

export default SearchNBtn;
