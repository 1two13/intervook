import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IDropDownMenuIcon {
  icon: any;
  text: string;
  className?: string;
}

function DropDownMenuIcon({ icon, text, className }: IDropDownMenuIcon) {
  return (
    <div className="pb-[6px]">
      <FontAwesomeIcon
        icon={icon}
        size="lg"
        className={`${className} mr-[7px] cursor-pointer text-deepGreen`}
      />
      {text}
    </div>
  );
}

export default DropDownMenuIcon;
