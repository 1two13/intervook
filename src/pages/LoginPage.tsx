import H1 from '../components/common/components/H1';
import LoginJoinBox from '../components/common/components/LoginJoinBox';
import Form from '../components/login/Form';
import SocialLogin from '../components/login/SocialLogin';

function LoginPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <LoginJoinBox>
        <H1 name={'인터뷰북'} />
        <Form />
        <SocialLogin />
      </LoginJoinBox>
    </div>
  );
}

export default LoginPage;
