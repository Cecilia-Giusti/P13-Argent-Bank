import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { useState } from "react";
import Profile from "./pages/Profile";
import { useAppSelector } from "./app/hooks";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const userData = useAppSelector((state) => state.user.user);

  return (
    <BrowserRouter>
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        userData={userData}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setToken={setToken}
            />
          }
        />
        {loggedIn && userData && (
          <Route
            path="/profile"
            element={<Profile userData={userData} token={token} />}
          />
        )}

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
