import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function SearchNBtn() {
  const navigate = useNavigate();

  const moveToQuizPage = () => {
    navigate('/quiz');
  };
  const isLogin = useSelector((state: any) => {
    return state.auth.isLogin;
  });
  const moveToWritingPage = () => {
    if (!isLogin) {
      window.alert('로그인을 먼저 해주세요. 로그인 후 글을 작성할 수 있습니다.');
    } else navigate('/writing');
  };

  return (
    <div className="flex flex-row w-[70%] h-[60px] m-auto mt-[7%] mb-[9%]">
      <div
        className="flex w-[75%] h-[100%] pl-[25px] items-center text-deepGray border-[1px] rounded-[10px] border-lightGray bg-lightGray/10 cursor-pointer"
        onClick={moveToWritingPage}
      >
        {!isLogin ? '로그인을 먼저 해주세요.' : '생각을 공유해주세요!'}
      </div>
      <button
        onClick={moveToQuizPage}
        className="w-[20%] h-[100%] ml-[5%] rounded-[80px] bg-deepGreen font-semibold text-[white] text-[21px]"
      >
        퀴즈
        <FontAwesomeIcon icon={faArrowRight} className="pl-[5px]" />
      </button>
    </div>
  );
}

export default SearchNBtn;
