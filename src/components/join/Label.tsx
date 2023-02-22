interface ILabel {
  name: string;
}

function Label({ name }: ILabel) {
  return <div className="flex w-[100%] mb-[0.5%] items-center">{name}</div>;
}

export default Label;
