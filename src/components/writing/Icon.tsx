import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IIcon {
  icon: any;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Icon({ icon, onClick }: IIcon) {
  return (
    <button onClick={onClick} className="mr-[20px] cursor-pointer">
      <FontAwesomeIcon
        icon={icon}
        size="2x"
        color="lightGray"
        className="cursor-pointer"
      />
    </button>
  );
}

export default Icon;
