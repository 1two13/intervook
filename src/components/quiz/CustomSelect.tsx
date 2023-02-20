import { useState } from 'react';

interface ICustomSelect {
  list: Array<string>;
}

function CustomSelect({ list }: ICustomSelect) {
  const [selected, setSelected] = useState('');
  const handleSelect = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <select
      value={selected}
      onChange={handleSelect}
      className="w-[100%] py-[4%] mt-[4%] mb-[2%] shadow border-lightGray cursor-pointer"
    >
      {list.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
