import { useState } from 'react';

import Label from './Label';
import Input from '../common/components/Input';
import Message from './Message';

function Name() {
  const [name, setName] = useState<string>('');
  const [nameMsg, setNameMsg] = useState<string>('');
  const [isName, setIsName] = useState<boolean>(false);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

    if (e.target.value.length < 2 || e.target.value.length > 7) {
      setIsName(false);
      setNameMsg('2글자 이상 7글자 미만으로 입력해주세요.');
    } else {
      setIsName(true);
      setNameMsg('올바른 이름 형식입니다.');
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
