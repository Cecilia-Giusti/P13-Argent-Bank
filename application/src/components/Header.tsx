import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getToken, setIsConnected } from "../slices/connectedSlice";
import { resetUserData } from "../slices/userSlice";

/**
 * Component to display the header
 * @component
 * @return {JSX.Element}
 */
const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const naviguate = useNavigate();
  const userData = useAppSelector((state) => state.user.user);
  const loggedIn = useAppSelector((state) => state.connected.isConnected);

  /**
   * Function disconnects the user
   * @return {void}
   */
  const handleDeconnected = (): void => {
    dispatch(resetUserData(null));
    dispatch(setIsConnected(false));
    dispatch(getToken(null));
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
