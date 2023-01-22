import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { joinSlice } from '../../redux-toolkit/slices/joinSlice';
import InputBox from '../common/components/InputBox';

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
      <InputBox
        label={'이메일'}
        placeholder={'example@interviewbook.com'}
        name={'email'}
        type={'text'}
        onChange={onChangeEmail}
        input={email}
        message={message}
      />
    </>
  );
}

export default Email;
