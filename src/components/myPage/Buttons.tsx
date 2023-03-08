import BgGreenBtn from '../common/components/BgGreenBtn';
import BgWhiteBtn from '../common/components/BgWhiteBtn';

function Buttons() {
  const checkDuplicate = () => {
    //! 추후 중복 확인가능한 기능 추가 필요
    if (true) window.alert('이미 존재하는 닉네임입니다. 다른 닉네임을 사용해주세요.');
    else window.alert('변경된 사항이 저장되었습니다.😊');
  };

  return (
    <div className="flex float-right mr-[24%] mb-[60px]">
      <BgGreenBtn name={'저장하기'} onClick={checkDuplicate} />
      <BgWhiteBtn name={'탈퇴하기'} />
    </div>
  );
}

export default Buttons;
