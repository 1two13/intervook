import H1 from '../components/common/components/H1';
import LoginNJoinBox from '../components/common/components/LoginNJoinBox';
import Form from '../components/login/Form';
import SocialLogin from '../components/login/SocialLogin';

function LoginPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <LoginNJoinBox>
        <H1 name={'인터뷰북'} />
        <Form />
        <SocialLogin />
      </LoginNJoinBox>
    </div>
  );
}

export default LoginPage;
