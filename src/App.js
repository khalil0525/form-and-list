import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/Users/UserForm";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);
  // const [validation, setValidation] = useState("");

  // const handleModalButtonClick = () => {
  //   setValidation("");
  // };
  const addUserHandler = (uName, uAge) => {
    setUsers((prevState) => {
      return [...prevState, { name: uName, age: uAge }];
    });
  };

  return (
    <div className="App">
      <UserForm onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
