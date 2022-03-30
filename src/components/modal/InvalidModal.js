import React from "react";
import styles from "./InvalidModal.module.css";

const InvalidModal = (props) => {
  return (
    <div className={`${styles.modal} ${props.errorMessage && styles.open}`}>
      <div className={styles.content}>
        <h1 className={styles["title-bar"]}>Invalid input</h1>
        <p>{props.errorMessage}</p>
        <button onClick={props.onModalButtonClick}>Okay</button>
      </div>
    </div>
  );
};

export default InvalidModal;
