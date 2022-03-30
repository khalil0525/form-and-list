import React from "react";
import styles from "./UserForm.module.css";

//The state for this component is in app
const UserForm = (props) => {
  return (
    <form className={styles.userform} onSubmit={props.onFormSubmit}>
      <label htmlFor="name">Username</label>
      <input
        className={styles["input-field"]}
        type="text"
        name="name"
        id="name"
        value={props.name}
        onChange={props.onNameChange}
      ></input>

      <label htmlFor="age">Age (Years)</label>
      <input
        className={styles["input-field"]}
        type="number"
        name="age"
        id="age"
        value={props.age}
        onChange={props.onAgeChange}
      ></input>

      <input className={styles.btn} type="submit" value="Add User"></input>
    </form>
  );
};

export default UserForm;
