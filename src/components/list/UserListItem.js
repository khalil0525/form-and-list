import React from "react";
import styles from "./UserListItem.module.css";

const UserListItem = (props) => {
  return (
    <li className={styles.item}>
      {props.name} ({props.age} years old)
    </li>
  );
};

export default UserListItem;
