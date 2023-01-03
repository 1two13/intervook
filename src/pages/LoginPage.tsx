import H1 from '../common/components/H1';
import LoginNJoinBox from '../common/components/LoginNJoinBox';
import Form from '../login/components/Form';
import EasyLogin from '../login/components/EasyLogin';

function LoginPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <LoginNJoinBox>
        <H1 name={'고토리북'} />
        <Form />
        <EasyLogin />
      </LoginNJoinBox>
    </div>
  );
}

export default LoginPage;
