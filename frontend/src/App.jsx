import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Users from "./pages/Users";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Users</Link> |{" "}
        <Link to="/register">Register</Link> | <Link to="/profile">Profile</Link> | <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
