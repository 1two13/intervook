import SearchNBtn from '../components/main/SearchNBtn';
import Buttons from '../components/main/Buttons';
import WritingCard from '../components/main/WritingCard';

function MainPages() {
  return (
    <div className="w-[70%] m-auto mb-[10%] border-2">
      <SearchNBtn />
      <Buttons />
      {/*데이터가 없어서 우선 하드코딩, 추후 map으로 데이터 보여줄 예정*/}
      <div className="grid grid-cols-2 gap-10 mt-[0.5%]">
        <WritingCard />
        <WritingCard />
        <WritingCard />
        <WritingCard />
        <WritingCard />
        <WritingCard />
        <WritingCard />
        <WritingCard />
        <WritingCard />
        <WritingCard />
      </div>
    </div>
  );
}

export default MainPages;
