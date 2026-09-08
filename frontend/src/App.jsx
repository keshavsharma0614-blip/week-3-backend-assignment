import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Users from "./pages/Users";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Users</Link> |{" "}
        <Link to="/register">Register</Link> | <Link to="/tasks">Tasks</Link> | <Link to="/profile">Profile</Link> | <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
