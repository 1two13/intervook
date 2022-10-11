import LoginNJoinBox from "../common/components/LoginNJoinBox";
import H1 from "../common/components/H1";
import Input from "../common/components/Input";
import Title from "../common/components/Title";

function JoinPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <LoginNJoinBox>
        <H1 name={"고토리북"} />
        <Title name={"이름"} />
        <Input placeholder="프로필 이름" />
        <Title name={"이메일"} />
        <Input placeholder="example.gotori.co" />
        <Title name={"비밀번호"} />
        <Input placeholder="영문, 숫자 포함 6자 이상" />
        <button className="w-[260px] h-[50px] pl-[10px] mt-[16px] text-[16px] border-[0.7px] rounded-[7px] bg-lightGreen text-[white]">
          로그인
        </button>
      </LoginNJoinBox>
    </div>
  );
}

export default JoinPage;
