import H1 from '../common/components/H1';
import LoginNJoinBox from '../common/components/LoginNJoinBox';
import Form from '../login/Form';
import SocialLogin from '../login/SocialLogin';

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
