import Hr from './Hr';
import Button from './Button';

function EasyLogin() {
  return (
    <>
      <div className="w-[100%] flex items-center justify-center">
        <Hr />
        <div className="text-[14px] px-[5px] text-deepGray text-center">간편 로그인</div>
        <Hr />
      </div>

      <div className="flex w-[100%] justify-between">
        <Button name={'깃'} />
        <Button name={'구'} />
        <Button name={'카'} />
      </div>
    </>
  );
}

export default EasyLogin;
