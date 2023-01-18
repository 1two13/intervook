import SearchNBtn from '../components/main/SearchNBtn';
import Buttons from '../components/main/Buttons';
import Card from '../components/main/Card';

function MainPages() {
  return (
    <div className="w-[70%] m-auto mb-[150px]">
      <SearchNBtn />
      <Buttons />
      {/*데이터가 없어서 우선 하드코딩, 추후 map으로 데이터 보여줄 예정*/}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default MainPages;
