import { useState } from 'react';

import Button from '../common/components/Button';

function Buttons() {
  const [clicked, setClicked] = useState('');
  const changeTag = (name: string) => {
    setClicked(name);
  };
  const buttonsNameList = ['최신 순', '이름 순', '좋아요 순', '북마크 순'];

  return (
    <div className="flex">
      {/* 최초 발행 시간을 알아야 하는데 서버에서 데이터를 넘겨줘야 이 부분은 가능할 것 같다. 일단 해당 버튼은 삭제될 수도 있음 */}
      <Button
        name={buttonsNameList[0]}
        onClick={() => changeTag(buttonsNameList[0])}
        clicked={clicked === buttonsNameList[0]}
      />
      <Button
        name={buttonsNameList[1]}
        onClick={() => changeTag(buttonsNameList[1])}
        clicked={clicked === buttonsNameList[1]}
      />
      <Button
        name={buttonsNameList[2]}
        onClick={() => changeTag(buttonsNameList[2])}
        clicked={clicked === buttonsNameList[2]}
      />
      <Button
        name={buttonsNameList[3]}
        onClick={() => changeTag(buttonsNameList[3])}
        clicked={clicked === buttonsNameList[3]}
      />
    </div>
  );
}

export default Buttons;
