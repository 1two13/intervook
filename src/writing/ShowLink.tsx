import { useState } from 'react';

function ShowLink() {
  const [link, setLink] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  return (
    <div className="flex w-[100%] h-[60px] mt-[20px] border-[1px] border-lightGray">
      <input
        onChange={onChange}
        placeholder="https://"
        className="w-[95%] pl-[10px] outline-0 rounded-[5px]"
      />
      {/* <button onClick={onClick} className="w-[5%] pr-[10px] text-deepGray text-[25px]">
        +
      </button> */}
    </div>
  );
}

export default ShowLink;
