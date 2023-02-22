interface IH1 {
  name: string;
}

function H1({ name }: IH1) {
  return <h1 className="text-[40px]">{name}</h1>;
}

export default H1;
