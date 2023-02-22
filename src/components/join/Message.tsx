interface IMessage {
  message: string;
  textColor: string;
}

function Message({ message, textColor }: IMessage) {
  return <div className={`ml-[0.3%] text-[16px] ${textColor}`}>{message}</div>;
}

export default Message;
