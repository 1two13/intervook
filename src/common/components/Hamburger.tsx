import DropDownMenu from "./DropDownMenu";

function Hamburger() {
  return (
    <div className="w-[80%] m-auto">
      <div className="min:hidden absolute w-[80%]">
        <DropDownMenu />
      </div>
    </div>
  );
}

export default Hamburger;
