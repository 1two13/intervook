import { useState } from 'react';

import Input from '../common/components/Input';
import Label from './Label';
import Message from './Message';

function Password() {
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;
    setPassword(e.target.value);
    if (!passwordRegex.test(e.target.value)) {
      setMessage('영문, 숫자 포함 6자리 이상 입력해주세요.');
      setIsPassword(false);
    } else {
      setMessage('안전한 비밀번호 입니다.🙂');
      setIsPassword(true);
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
