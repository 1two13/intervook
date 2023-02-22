import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { joinSlice } from '../../redux-toolkit/slices/joinSlice';
import Input from '../common/components/Input';
import Label from './Label';
import Message from './Message';

function CheckPassword() {
  const dispatch = useDispatch();
  const isCorrect = useSelector((state: any) => state.join.isCorrect);
  const password = useSelector((state: any) => state.join.password);
  const [message, setMessage] = useState<string>('');

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== password) {
      dispatch(joinSlice.actions.isCorrect(false));
      setMessage('일치하지 않는 비밀번호입니다.');
    } else {
      dispatch(joinSlice.actions.isCorrect(true));
      dispatch(joinSlice.actions.password(e.target.value));
      setMessage('비밀번호가 일치합니다.🙂');
    }
  };

  return (
    <div className="w-[70%] h-[20%]">
      <Label name={'비밀번호 확인'} />
      <Input
        placeholder="일치하지 않는 비밀번호입니다."
        name="password"
        type="password"
        onChange={onChangePassword}
      />
      {password.length > 0 && isCorrect ? (
        <Message message={message} textColor="text-deepGray" />
      ) : (
        <Message message={message} textColor="text-[red]" />
      )}
    </div>
  );
}

export default CheckPassword;
