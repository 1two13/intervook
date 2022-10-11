import Hr from "../login/components/Hr";
import Input from "../common/components/Input";
import Button from "../login/components/Button";
import H1 from "../common/components/H1";
import LoginNJoinBox from "../common/components/LoginNJoinBox";

function LoginPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <LoginNJoinBox>
        <H1 name={"고토리북"} />
        <Input placeholder="이메일" />
        <Input placeholder="비밀번호" />
        <button className="w-[260px] h-[45px] pl-[10px] mb-[26px] text-[16px] border-[0.7px] rounded-[7px] bg-lightGreen text-[white]">
          로그인
        </button>

        <div className="w-[90%] flex items-center justify-center">
          <Hr />
          <div className="text-[14px] px-[5px] text-deepGray text-center">
            간편 로그인
          </div>
          <Hr />
        </div>

        <div className="flex w-[90%] justify-around">
          <Button name={"깃"} />
          <Button name={"구"} />
          <Button name={"카"} />
        </div>
      </LoginNJoinBox>
    </div>
  );
}

export default LoginPage;
