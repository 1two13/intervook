import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { joinSlice } from '../redux-toolkit/slices';

import Input from '../common/components/Input';
import Label from './Label';
import Message from './Message';

function Password() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;

    setPassword(e.target.value);
    if (!passwordRegex.test(e.target.value)) {
      dispatch(joinSlice.actions.isPassword(false));
      setMessage('영문, 숫자 포함 6자리 이상 입력해주세요.');
    } else {
      dispatch(joinSlice.actions.isPassword(true));
      setMessage('안전한 비밀번호 입니다.🙂');
    }
  };

  return (
    <>
      <Label name={'비밀번호'} />
      <Input
        placeholder="영문, 숫자 포함 6자 이상"
        name="password"
        type="password"
        onChange={onChangePassword}
      />
      {password.length > 0 ? <Message message={message} /> : ''}
    </>
  );
}

export default Password;
