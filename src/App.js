import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/form/UserForm";
import UserList from "./components/list/UserList";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [validation, setValidation] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!name || !age) {
      // Call modal
      //Return
    }
    if (age < 0) {
      //call modal
      //Return
    }

    setUsers((prevState) => [...prevState, { name: name, age: age }]);
    setName("");
    setAge("");
  };

  return (
    <div className="App">
      <UserForm
        name={name}
        age={age}
        onNameChange={handleNameChange}
        onAgeChange={handleAgeChange}
        onFormSubmit={handleFormSubmit}
      />

      <UserList users={users} />
      {/* Conditionally render the modal based on the validation */}
    </div>
  );
}

export default App;
