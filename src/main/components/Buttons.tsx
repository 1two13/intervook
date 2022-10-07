import Button from "../../common/components/Button";

function Buttons() {
  return (
    <div className="flex w-[70%] m-0 m-auto">
      <Button name={"최신 순"} />
      <Button name={"이름 순"} />
      <Button name={"좋아요 순"} />
      <Button name={"북마크 순"} />
    </div>
  );
}

export default Buttons;
