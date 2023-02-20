import { useState } from "react";
import UserForm from "./components/User/UserForm/UserForm";
import "./App.css";
import UsersList from "./components/User/UsersList/UsersList";

function App() {
  const [users, setUsers] = useState([{ id: "u1", name: "Jhin", age: "44" }]);

  const addUserHandler = (uName, uAge) => {
    // We receive as argument the prev state snapshot
    setUsers((prevUsers) => {
      // We must return the new state snapshot in the body of the function
      return [...prevUsers, { id: Math.random(), name: uName, age: uAge }];
    });
  };

  return (
    <div className="App">
      <UserForm onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
