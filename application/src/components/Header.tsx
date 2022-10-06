import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { resetUserData } from "../feature/userSlice";
import { userDataInt } from "../models";

type Props = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userData: userDataInt | null;
};

const Header = ({ loggedIn, setLoggedIn, userData }: Props) => {
  const dispatch = useAppDispatch();
  const naviguate = useNavigate();
  const handleDeconnected = () => {
    setLoggedIn(false);
    dispatch(resetUserData(null));
    return naviguate("/");
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {loggedIn && userData ? (
        <div>
          <NavLink to={"/profile"} className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {userData.firstName}
          </NavLink>

          <button
            className="main-nav-item button-no-style"
            onClick={() => handleDeconnected()}
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <NavLink to={"/login"} className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
