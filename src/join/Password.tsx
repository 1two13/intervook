import { useState } from 'react';

import Input from '../common/components/Input';
import Label from './Label';
import Comments from './Comments';

function Password() {
  // 비밀번호 확인
  const [password, setPassword] = useState<string>('');
  // 메세지 상태 저장
  const [passwordMsg, setPasswordMsg] = useState<string>('');
  // 유효성
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;
    setPassword(e.target.value);
    if (!passwordRegex.test(e.target.value)) {
      setPasswordMsg('영문, 숫자 포함 6자리 이상 입력해주세요.');
      setIsPassword(false);
    } else {
      setPasswordMsg('안전한 비밀번호 입니다.🙂');
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
      {password.length > 0 ? <Comments message={passwordMsg} /> : ''}
    </>
  );
}

export default Password;
