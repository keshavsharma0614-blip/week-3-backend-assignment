import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("Loading users...");

  useEffect(() => {
    axios
      .get("https://scaling-umbrella-g4wj69j5g66q2pww7-3000.app.github.dev/api/users")
      .then((res) => {
        setUsers(res.data);
        setMessage("Backend connected successfully");
      })
      .catch((error) => {
        console.error(error);
        setMessage("Backend se connection nahi ho raha");
      });
  }, []);

  return (
    <div>
      <h1>Week 3 User Management</h1>

      <p>{message}</p>

      <h2>Users</h2>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user) => (
          <div key={user._id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default App;
