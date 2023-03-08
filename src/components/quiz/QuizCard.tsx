import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../common/components/Button';

interface IQuizCard {
  category: string;
  type: string;
  title: string;
}

function QuizCard({ category, type, title }: IQuizCard) {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);

  const clickCard = () => {
    setIsClick(!isClick);
    navigate('/quiz/problem');
  };

  return (
    <div
      onClick={clickCard}
      className="flex flex-col h-[100%] max-h-[100px] p-[2%] justify-between shadow-md bg-lightGray/10 cursor-pointer"
    >
      <div className="flex">
        {category === 'CS' ? (
          <Button
            name={category}
            className="border-purple bg-purple/10 text-purple font-semibold"
          />
        ) : (
          ''
        )}
        {category === '프론트' ? (
          <Button name={category} className="border-blue bg-blue/10 text-blue font-semibold" />
        ) : (
          ''
        )}
        <Button
          name={type}
          className="border-deepGreen bg-deepGreen/10 text-deepGreen font-semibold"
        />
      </div>

      <div className="my-[5%] mx-[1%] font-semibold">{title}</div>
    </div>
  );
}

export default QuizCard;
