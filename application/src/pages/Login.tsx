import { useRef, useEffect } from "react";
import { loginInt } from "../models";
import { connectUser } from "../services/login";
import { useNavigate } from "react-router";

type Props = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserData: React.Dispatch<React.SetStateAction<{}>>;
};

const Login = ({ loggedIn, setLoggedIn, setUserData }: Props) => {
  const formLogin = useRef<HTMLFormElement>(null);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
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

      // POST
      connectUser(newLogin, formMessage, setUserData, setLoggedIn);
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
