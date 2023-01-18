import Hr from './Hr';
import kakaoLogin from '../../assets/images/kakaoLogin.png';
import naverLogin from '../../assets/images/naverLogin.png';

function SocialLogin() {
  return (
    <>
      <div className="w-[100%] flex mb-[2%] items-center justify-center">
        <Hr />
        <div className="text-[14px] px-[5px] text-deepGray text-center">간편 로그인</div>
        <Hr />
      </div>

      <a href={''}>
        <img src={kakaoLogin} alt="카카오 로그인 버튼" className="w-[70%] m-auto" />
      </a>
      <a href={''} className="mt-[2%]">
        <img src={naverLogin} alt="네이버 로그인 버튼" className="w-[40%] m-auto" />
      </a>
    </>
  );
}

export default SocialLogin;
