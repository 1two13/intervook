import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IButton {
  icon: any;
}

function Button({ icon }: IButton) {
  return (
    <button className="mr-[20px]">
      <FontAwesomeIcon
        icon={icon}
        size="2x"
        color="lightGray"
        className="cursor-pointer"
      />
    </button>
  );
}

export default Button;
