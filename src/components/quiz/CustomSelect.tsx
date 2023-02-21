import Select from 'react-select';
import { useDispatch } from 'react-redux';

import { selectSlice } from '../../redux-toolkit/slices/selectSlice';

interface ICustomSelect {
  reference: any;
  options: Array<Object>;
  placeholder: string;
  index: any;
}

function CustomSelect({ reference, options, placeholder, index }: ICustomSelect) {
  const dispatch = useDispatch();
  const onChangeSelect = (e: any) => {
    dispatch(selectSlice.actions.isClick(true));
    if (e && index === 0) dispatch(selectSlice.actions.updateCategory(e.value));
    else if (e && index === 1) dispatch(selectSlice.actions.updateType(e.value));
    else dispatch(selectSlice.actions.reset());
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
