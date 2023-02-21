import { useRef } from 'react';

import QuizCard from '../components/quiz/QuizCard';
import CustomSelect from '../components/quiz/CustomSelect';

function QuizPage() {
  const CATEGORY_SELECT = '카테고리 선택';
  const TYPE_SELECT = '문제유형 선택';
  const CATEGORY_LIST = [
    { value: 'CS', label: 'CS' },
    { value: '프론트', label: '프론트' },
  ];
  const TYPE_LIST = [
    { value: '단답형', label: '단답형' },
    { value: '서술형', label: '서술형' },
  ];
  // 임시 데이터
  const data = [
    { id: 0, category: '프론트', type: '단답형', title: '1' },
    { id: 1, category: '프론트', type: '서술형', title: '2' },
    { id: 2, category: 'CS', type: '단답형', title: '3' },
    { id: 3, category: 'CS', type: '서술형', title: '4' },
  ];
  const firstSelectRef = useRef<any>(null);
  const secondSelectRef = useRef<any>(null);

  const onClickResetButton = () => {
    if (firstSelectRef.current || secondSelectRef.current) {
      firstSelectRef.current.clearValue();
      secondSelectRef.current.clearValue();
    }
  };

  return (
    <div className="flex w-[70%] m-auto mb-[150px] mt-[7%]">
      <div className="w-[25%] h-[100%] p-[2%] mr-[3%] shadow bg-lightGray/10">
        <h1 className="text-lg font-bold">문제 검색</h1>
        <CustomSelect
          options={CATEGORY_LIST}
          placeholder={CATEGORY_SELECT}
          reference={firstSelectRef}
          index={0}
        />
        <CustomSelect
          options={TYPE_LIST}
          placeholder={TYPE_SELECT}
          reference={secondSelectRef}
          index={1}
        />
        <button
          onClick={() => onClickResetButton()}
          className="mt-[16%] float-right text-sm cursor-pointer"
        >
          초기화
        </button>
      </div>

      {/*데이터가 없어서 임시 데이터 더미 생성*/}
      <div className="grid grid-cols-2 gap-10 w-[80%] mt-[0.5%]">
        {data.map((el) => (
          <QuizCard key={el.id} category={el.category} type={el.type} title={el.title} />
        ))}
      </div>
    </div>
  );
}

export default QuizPage;
