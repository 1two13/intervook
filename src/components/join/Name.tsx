import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { joinSlice } from '../../redux-toolkit/slices/joinSlice';
import Label from './Label';
import Input from '../common/components/Input';
import Message from './Message';

function Name() {
  const dispatch = useDispatch();
  const isName = useSelector((state: any) => state.join.isName);
  const name = useSelector((state: any) => state.join.name);
  const [message, setMessage] = useState<string>('');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 2 || e.target.value.length > 7) {
      dispatch(joinSlice.actions.isName(false));
      setMessage('2글자 이상 7글자 미만으로 입력해주세요.');
    } else {
      dispatch(joinSlice.actions.isName(true));
      dispatch(joinSlice.actions.name(e.target.value));
      setMessage('올바른 이름 형식입니다.');
    }
  };

  return (
    <div className="w-[70%] h-[20%]">
      <Label name={'닉네임'} />
      <Input placeholder="프로필 이름" name="name" type="text" onChange={onChangeName} />
      {name.length > 0 && isName ? (
        <Message message={message} textColor="text-deepGray" />
      ) : (
        <Message message={message} textColor="text-[red]" />
      )}
    </div>
  );
}

export default Name;
