import { useState } from 'react';

import Input from '../common/components/Input';
import Label from './Label';
import Comments from './Comments';

function Email() {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    setEmail(e.target.value);

    if (!emailRegex.test(e.target.value)) {
      setIsEmail(false);
      setMessage('이메일 형식이 틀렸어요! 다시 확인해주세요.🥲');
    } else {
      setIsEmail(true);
      setMessage('올바른 이메일 형식입니다.');
    }
  };

  return (
    <>
      <Label name={'이메일'} />
      <Input
        placeholder="example@interviewbook.com"
        name="email"
        type="text"
        onChange={onChangeEmail}
      />
      {email.length > 0 ? <Comments message={message} /> : ''}
    </>
  );
}

export default Email;
