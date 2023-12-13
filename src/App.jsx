import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { Navbar } from "./components";
import { Home, Browse, Account, Auth, Signup } from "./pages";
import "./App.css";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext.jsx";

const RenderNavbar = () => {
  const currentPath = window.location.pathname;

  if (currentPath === "/" || currentPath === "/auth" || currentPath.startsWith("/account")) {
    return null;
  }
  return <Navbar />;
};
const App = () => {
  const {currentUser} = useContext(AuthContext)
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/auth" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/account/*" element={<RequireAuth><Account /></RequireAuth>} />
      </Routes>
      <RenderNavbar />
      {/*<Footer />*/}
    </Router>
  );
};

export default App;
