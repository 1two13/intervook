interface ILoginJoinBox {
  children: React.ReactNode;
}

function LoginJoinBox({ children }: ILoginJoinBox) {
  return (
    <div className="flex flex-col max-w-[27%] px-[2.5%] py-[3%] justify-center items-center border-[0.7px] border-lightGray rounded-[15px] shadow bg-lightGray/5">
      {children}
    </div>
  );
}

export default LoginJoinBox;
