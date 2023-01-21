function LoginJoinBox({ children }: any) {
  return (
    <div className="flex flex-col max-w-[25%] px-[3%] py-[2%] justify-center items-center border-[0.7px] border-deepGray rounded-[15px] bg-[white]">
      {children}
    </div>
  );
}

export default LoginJoinBox;
