import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import UnLogged from './UnLogged';
import Logged from './Logged';
import Hamburger from './Hamburger';
import Logo from '../../../assets/logo/ms-icon-70x70.png';

function TopFixedBar() {
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState(false);
  const isLogin = useSelector((state: any) => state.auth.isLogin);

  const moveToMainPage = () => {
    navigate('/');
  };

  const showMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <>
      <div className="sticky top-0 bg-[white] z-[999]">
        <div className="flex w-[80%] h-[75px] m-auto items-center justify-between">
          <div onClick={moveToMainPage} className="cursor-pointer text-[36px]">
            <img src={Logo} />
          </div>

          <div className="flex items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className="text-deepGreen" />

            {isLogin ? <Logged propFunction={showMenu} /> : <UnLogged />}
          </div>
        </div>

        <div className="border-b-[1px] border-b-lightGray"></div>
      </div>

      {/* menuToggle이 true이면서, 스크린 크기가 min보다 작을 때 드롭다운 메뉴 보여주기 */}
      {menuToggle && <Hamburger />}
    </>
  );
}

export default TopFixedBar;
