import Select from 'react-select';
import { useState } from 'react';

interface ICustomSelect {
  options: Array<Object>;
  placeholder: string;
  reference: any;
}

function CustomSelect({ options, placeholder, reference }: ICustomSelect) {
  const [selected, setSelected] = useState('');
  const onChangeSelect = (e: any) => {
    if (e) setSelected(e.value);
    else setSelected('');
  };

  return (
    <Select
      ref={reference}
      onChange={onChangeSelect}
      options={options}
      placeholder={placeholder}
      className={'mt-[3%] mb-[2%]'}
    />
  );
}

export default CustomSelect;
