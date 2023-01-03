import { useState } from 'react';

import Input from '../common/components/Input';
import Label from './Label';
import Message from './Message';

function Name() {
  // 이름 확인
  const [name, setName] = useState<string>('');
  // 메세지 상태 저장
  const [nameMsg, setNameMsg] = useState<string>('');
  // 유효성
  const [isName, setIsName] = useState<boolean>(false);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 7) {
      setNameMsg('2글자 이상 7글자 미만으로 입력해주세요.');
      setIsName(false);
    } else {
      setNameMsg('올바른 이름 형식입니다.');
      setIsName(true);
    }
  };

  return (
    <>
      <Label name={'이름'} />
      <Input placeholder="프로필 이름" name="name" type="text" onChange={onChangeName} />
      {name.length > 0 ? <Message message={nameMsg} /> : ''}
    </>
  );
}

export default Name;
