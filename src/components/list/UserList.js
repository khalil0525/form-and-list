import React from "react";
import styles from "./UserList.module.css";
import UserListItem from "./UserListItem";
const UserList = (props) => {
  return (
    <ul className={styles["user-list"]}>
      <UserListItem name={"Khalil"} age={26} />
      <UserListItem name={"Khalil"} age={26} />
    </ul>
  );
};

export default UserList;
