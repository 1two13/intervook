interface ITitle {
  name: string;
}

function Label({ name }: ITitle) {
  return <div className="flex w-[100%]">{name}</div>;
}

export default Label;
