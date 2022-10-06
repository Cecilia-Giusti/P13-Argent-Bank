import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import { useAppSelector } from "./app/hooks";

const App: React.FC = () => {
  const userData = useAppSelector((state) => state.user.user);
  const loggedIn = useAppSelector((state) => state.connected.isConnected);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {loggedIn && userData && (
          <Route path="/profile" element={<Profile />} />
        )}

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
