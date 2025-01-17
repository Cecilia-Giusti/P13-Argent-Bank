import { useRef, useEffect } from "react";
import { loginInt } from "../models";
import { connectUser } from "../services/login";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";

/**
 * Component to display the login page
 * @component
 * @return {JSX.Element}
 */
const Login: React.FC = (): JSX.Element => {
  const formLogin = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loggedIn = useAppSelector((state) => state.connected.isConnected);

  /**
   * Function sending the form when user wants to log in
   * @function
   * @param {React.FormEvent} e - Event at the submission of the form
   * @return {void}
   */
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const formMessage = document.querySelector(".formMessage");
    if (formMessage !== null) {
      formMessage.innerHTML = "";
    }

    if (formLogin.current !== null) {
      const newEmail = formLogin.current[0] as HTMLInputElement;
      const newPassword = formLogin.current[1] as HTMLInputElement;

      const newLogin: loginInt = {
        email: newEmail.value,
        password: newPassword.value,
      };

      connectUser(newLogin, formMessage, dispatch);
    }
  };

  useEffect(() => {
    if (loggedIn && formLogin.current !== null) {
      formLogin.current.reset();
      navigate("/profile");
    }
  }, [loggedIn, navigate]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle"></i>
        <h1>Sign In</h1>
        <form ref={formLogin} onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="email" id="username" name="username" required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input type="submit" className="sign-in-button" value="Sign In" />
          <div className="formMessage"></div>
        </form>
      </section>
    </main>
  );
};

export default Login;
