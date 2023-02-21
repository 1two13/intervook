import QuizCard from '../components/quiz/QuizCard';
import CustomSelect from '../components/quiz/CustomSelect';

function QuizPage() {
  const FIRST_SELECT = ['카테고리 선택', 'CS', '프론트'];
  const SECOND_SELECT = ['문제유형 선택', '단답형', '서술형'];

  return (
    <div className="flex w-[70%] m-auto mb-[150px] mt-[7%]">
      <div className="w-[25%] h-[100%] p-[2%] mr-[3%] shadow bg-lightGray/10">
        <h1 className="text-lg font-bold">문제 검색</h1>
        <CustomSelect list={FIRST_SELECT} />
        <CustomSelect list={SECOND_SELECT} />
        <button className="mt-[16%] float-right text-sm cursor-pointer">초기화</button>
      </div>
      {/*데이터가 없어서 우선 하드코딩, 추후 map으로 데이터 보여줄 예정*/}
      <div className="grid grid-cols-2 gap-10 w-[80%] mt-[0.5%]">
        <QuizCard category={'프론트'} type={'단답형'} title={'캐시 메모리'} />
        <QuizCard category={'프론트'} type={'서술형'} title={'캐시 메모리'} />
        <QuizCard category={'CS'} type={'단답형'} title={'캐시 메모리'} />
        <QuizCard category={'CS'} type={'서술형'} title={'캐시 메모리'} />
        <QuizCard category={'프론트'} type={'단답형'} title={'캐시 메모리'} />
        <QuizCard category={'프론트'} type={'서술형'} title={'캐시 메모리'} />
        <QuizCard category={'CS'} type={'단답형'} title={'캐시 메모리'} />
        <QuizCard category={'CS'} type={'서술형'} title={'캐시 메모리'} />
      </div>
    </div>
  );
}

export default QuizPage;
