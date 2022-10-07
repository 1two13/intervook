import SearchNBtn from "../main/components/SearchNBtn";
import Buttons from "../main/components/Buttons";
import Cards from "../main/components/Cards";

function MainPages() {
  return (
    <div className="w-[70%] m-auto mb-[150px]">
      <SearchNBtn />
      <Buttons />
      {/*데이터가 없어서 우선 하드코딩, 추후 map으로 데이터 보여줄 예정*/}
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}

export default MainPages;
