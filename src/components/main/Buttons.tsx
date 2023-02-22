import Button from '../common/components/Button';

function Buttons() {
  return (
    <div className="flex">
      {/* 최초 발행 시간을 알아야 하는데 서버에서 데이터를 넘겨줘야 이 부분은 가능할 것 같다. 일단 해당 버튼은 삭제될 수도 있음 */}
      <Button name={'최신 순'} />
      <Button name={'이름 순'} />
      <Button name={'좋아요 순'} />
      <Button name={'북마크 순'} />
    </div>
  );
}

export default Buttons;
