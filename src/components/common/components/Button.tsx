import { useState } from 'react';

interface IButton {
  name: string;
  className?: string;
}

function Button({ name, className }: IButton) {
  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(!clicked);

  return (
    <div
      className={`flex w-[81px] h-[36px] mr-[18px] pb-[1px] items-center justify-center cursor-pointer text-[14px] border-[2px] rounded-[80px] border-lightGray 
      ${className} ${
        clicked ? 'border-deepGreen bg-deepGreen/10 text-deepGreen font-semibold' : 'bg-lightGray/5'
      }`}
      onClick={() => onClick()}
    >
      {name}
    </div>
  );
}

export default Button;
