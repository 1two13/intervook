import QuizCard from '../components/quiz/QuizCard';

function QuizPage() {
  return (
    <div className="w-[70%] m-auto mb-[150px] mt-[7%]">
      {/*데이터가 없어서 우선 하드코딩, 추후 map으로 데이터 보여줄 예정*/}
      <div className="grid grid-cols-2 gap-10 mt-[0.5%]">
        <QuizCard category={'프론트'} type={'단답형'} title={'캐시 메모리'} />
        <QuizCard category={'프론트'} type={'서술형'} title={'캐시 메모리'} />
        <QuizCard category={'CS'} type={'단답형'} title={'캐시 메모리'} />
        <QuizCard category={'CS'} type={'서술형'} title={'캐시 메모리'} />
      </div>
    </div>
  );
}

export default QuizPage;
