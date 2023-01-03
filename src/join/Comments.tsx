interface IMessage {
  message: string;
}

function Comments({ message }: IMessage) {
  return (
    <div className="mt-[-26px] mb-[20px] text-[12px] text-deepGray">
      {message}
    </div>
  );
}

export default Comments;
