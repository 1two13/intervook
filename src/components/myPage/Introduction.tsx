function Introduction() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[50%]">
        <div className="text-[18px]">자기소개</div>
        <input
          placeholder="프론트엔드 개발자가 되고 싶은 고주디입니다!"
          className="flex w-[100%] h-[140px] mb-[120px] p-[15px] justify-between text-[black] shadow-md bg-lightGray/10 focus:outline-none"
        />
      </div>
    </div>
  );
}

export default Introduction;
