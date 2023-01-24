interface IMessage {
  message: string;
  textColor: string;
}

function Message({ message, textColor }: IMessage) {
  return <div className={`mt-[-26px] mb-[20px] text-[12px] ${textColor}`}>{message}</div>;
}

export default Message;
