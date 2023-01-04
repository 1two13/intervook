import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IIcons {
  icon: any;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseOver?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function Icons({ icon, onClick, onMouseOver, onMouseOut }: IIcons) {
  return (
    <div onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <FontAwesomeIcon
        size="2x"
        color="deepGreen"
        className="ml-[20px] cursor-pointer"
        icon={icon}
      />
    </div>
  );
}

export default Icons;
