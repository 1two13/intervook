import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { joinSlice } from '../../redux-toolkit/slices/joinSlice';
import Input from '../common/components/Input';
import Label from './Label';
import Message from './Message';

function Email() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    setEmail(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      dispatch(joinSlice.actions.isEmail(false));
      setMessage('이메일 형식이 틀렸어요! 다시 확인해주세요.🥲');
    } else {
      dispatch(joinSlice.actions.isEmail(true));
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
      {email.length > 0 ? <Message message={message} /> : ''}
    </>
  );
}

export default Email;
