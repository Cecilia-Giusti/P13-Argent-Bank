import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        {loggedIn && <Route path="/profile" element={<Profile />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
