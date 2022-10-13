import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IIcons {
  icon: any;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function Icons({ icon, onClick }: IIcons) {
  return (
    <div onClick={onClick}>
      <FontAwesomeIcon
        size="2x"
        color="lightGreen"
        className="ml-[20px] cursor-pointer"
        icon={icon}
      />
    </div>
  );
}

export default Icons;
