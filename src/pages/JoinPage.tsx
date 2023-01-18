import LoginNJoinBox from '../common/components/LoginNJoinBox';
import H1 from '../common/components/H1';
import Name from '../components/join/Name';
import Email from '../components/join/Email';
import Password from '../components/join/Password';
import Button from '../components/join/Button';

function JoinPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <LoginNJoinBox>
        <H1 name={'회원가입'} />

        <form className="flex flex-col">
          <Name />
          <Email />
          <Password />
          <Button />
        </form>
      </LoginNJoinBox>
    </div>
  );
}

export default JoinPage;
