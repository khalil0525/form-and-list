import React, { useState } from "react";
import styles from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
//The state for this component is in app
const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    props.onAddUser(name, age);
    setName("");
    setAge("");
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleError = () => {
    setError(null);
  };

  return (
    <div>
      {/* Unlike in HTML/CSS, we can use conditional rendering to open/close modal. We do not have to dynamically add/remove classes to open/close it. */}
      {error && (
        <ErrorModal
          title={error.message}
          message={error.message}
          onError={handleError}
        ></ErrorModal>
      )}
      <Card className={styles.userform}>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Username</label>
          <input
            // className={styles["input-field"]}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
          ></input>

          <label htmlFor="age">Age (Years)</label>
          <input
            // className={styles["input-field"]}
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={handleAgeChange}
          ></input>
          <Button type="submit">Add User</Button>

          {/* <input className={styles.btn} type="submit" value="Add User"></input> */}
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
