import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function SearchNBtn() {
  const navigate = useNavigate();
  const moveToWritingPage = () => {
    navigate('/writing');
  };
  const isLogin = useSelector((state: any) => {
    return state.auth.isLogin;
  });
  const moveToQuizPage = () => {
    navigate('/quiz');
  };

  return (
    <div className="w-[70%] h-[60px] m-auto mt-[30px] mb-[50px]">
      <input
        placeholder={!isLogin ? '로그인을 먼저 해주세요.' : '생각을 공유해주세요!'}
        className="w-[75%] h-[100%] pl-[25px] border-[2px] rounded-[10px] border-lightGray cursor-pointer outline-0"
        onClick={moveToWritingPage}
        disabled={!isLogin}
      />
      <button
        onClick={moveToQuizPage}
        className="w-[20%] h-[100%] ml-[5%] rounded-[80px] bg-deepGreen text-[white] text-[20px]"
      >
        퀴즈
        <FontAwesomeIcon icon={faArrowRight} className="pl-[5px]" />
      </button>
    </div>
  );
}

export default SearchNBtn;
