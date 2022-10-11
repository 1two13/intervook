interface IH1 {
  name: string;
}

function H1({ name }: IH1) {
  return <h1 className="mb-[25px] text-[40px]">{name}</h1>;
}

export default H1;
