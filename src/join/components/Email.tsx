import { useState } from 'react';

import Input from '../../common/components/Input';
import Label from './Label';
import Comments from './Comments';

function Email() {
  const [email, setEmail] = useState<string>('');
  const [emailMsg, setEmailMsg] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setEmail(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      setEmailMsg('이메일 형식이 틀렸어요! 다시 확인해주세요.🥲');
      setIsEmail(false);
    } else {
      setEmailMsg('올바른 이메일 형식입니다.');
      setIsEmail(true);
    }
  };

  return (
    <>
      <Label name={'이메일'} />
      <Input placeholder="example@gotori.com" name="email" type="text" onChange={onChangeEmail} />
      {email.length > 0 ? <Comments message={emailMsg} /> : ''}
    </>
  );
}

export default Email;
