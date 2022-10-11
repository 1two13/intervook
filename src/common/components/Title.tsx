interface ITitle {
  name: string;
}

function Title({ name }: ITitle) {
  return <div className="flex w-[100%]">{name}</div>;
}

export default Title;
