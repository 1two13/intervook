interface ILabel {
  name: string;
}

function Label({ name }: ILabel) {
  return <div className="flex w-[100%]">{name}</div>;
}

export default Label;
