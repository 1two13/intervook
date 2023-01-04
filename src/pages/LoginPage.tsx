import H1 from '../common/components/H1';
import LoginNJoinBox from '../common/components/LoginNJoinBox';
import Form from '../login/Form';
import EasyLogin from '../login/EasyLogin';

function LoginPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <LoginNJoinBox>
        <H1 name={'인터뷰북'} />
        <Form />
        <EasyLogin />
      </LoginNJoinBox>
    </div>
  );
}

export default LoginPage;
