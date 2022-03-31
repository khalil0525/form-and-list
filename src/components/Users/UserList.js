import React from "react";
import styles from "./UserList.module.css";
import UserListItem from "./UserListItem";
import Card from "../UI/Card";
const UserList = (props) => {
  const list = (
    <Card className={styles["user-list"]}>
      <ul>
        {props.users.map((user, index) => (
          <UserListItem key={index} name={user.name} age={user.age} />
        ))}
      </ul>
    </Card>
  );

  return <>{props.users.length > 0 && list}</>;
};

export default UserList;
