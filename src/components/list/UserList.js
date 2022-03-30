import React from "react";
import styles from "./UserList.module.css";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  const list = (
    <ul className={styles["user-list"]}>
      {props.users.map((user, index) => (
        <UserListItem key={index} name={user.name} age={user.age} />
      ))}
    </ul>
  );

  return <>{props.users.length > 0 && list}</>;
};

export default UserList;
