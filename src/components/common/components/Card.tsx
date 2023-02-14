interface ICard {
  children: React.ReactNode;
}

function Card({ children }: ICard) {
  return (
    <div className="flex pt-[2%] justify-between text-deepGray shadow-md bg-lightGray/20 cursor-pointer">
      {children}
    </div>
  );
}

export default Card;
