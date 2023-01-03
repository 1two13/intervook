interface IMessage {
  message: string;
}

function Message({ message }: IMessage) {
  return <div className="mt-[-26px] mb-[20px] text-[12px] text-deepGray">{message}</div>;
}

export default Message;
