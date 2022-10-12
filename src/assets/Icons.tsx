import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IIcons {
  icon: any;
}

function Icons({ icon }: IIcons) {
  return (
    <FontAwesomeIcon
      size="2x"
      color="lightGreen"
      className="ml-[20px]"
      icon={icon}
    />
  );
}

export default Icons;
