import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { RootState } from "../../reducers";
import UnLogged from "./UnLogged";
import Logged from "./Logged";

function TopFixedBar() {
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  // console.log(isLogin);

  return (
    <div className="sticky top-0 h-[75px] bg-[white]">
      <div className="flex w-[80%] h-[75px] m-auto items-center justify-between">
        <div className="text-[36px]">고토리북</div>

        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="2x"
            color="lightGreen"
          />

          {isLogin ? <Logged /> : <UnLogged />}
        </div>
      </div>

      <div className="border-b-[1px] border-b-[#dbdbdb]"></div>
    </div>
  );
}

export default TopFixedBar;
