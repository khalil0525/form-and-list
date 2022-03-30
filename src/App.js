import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/form/UserForm";
import UserList from "./components/list/UserList";
import InvalidModal from "./components/modal/InvalidModal";
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
      setValidation("Please enter a valid name and age(non-empty values)");
      return;
      // Call modal
      //Return
    }
    if (age < 0) {
      setValidation("Please enter a valid age (> 0).");
      return;
      //call modal
      //Return
    }

    setUsers((prevState) => [...prevState, { name: name, age: age }]);
    setName("");
    setAge("");
  };

  const handleModalButtonClick = () => {
    setValidation("");
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
      <InvalidModal
        errorMessage={validation}
        onModalButtonClick={handleModalButtonClick}
      />
    </div>
  );
}

export default App;
