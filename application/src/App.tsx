import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import Profile from "./pages/Profile";
import { userDataInt } from "./models";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState<userDataInt>({});
  const [token, setToken] = useState("");
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
              setUserData={setUserData}
              setToken={setToken}
            />
          }
        />
        {loggedIn && userData && (
          <Route
            path="/profile"
            element={
              <Profile
                userData={userData}
                token={token}
                setUserData={setUserData}
              />
            }
          />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
