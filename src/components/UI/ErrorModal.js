import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={styles.content}>
          <p>{props.message}</p>
        </div>

        <footer className={styles.actions}>
          <Button onClick={props.onError}>Okay</Button>
        </footer>
      </Card>
    </div>
    // <div className={`${styles.modal} ${props.errorMessage && styles.open}`}>
    //   <div className={styles.content}>
    //     <h1 className={styles["title-bar"]}>Invalid input</h1>
    //     <p>{props.errorMessage}</p>
    //     <button onClick={props.onModalButtonClick}>Okay</button>
    //   </div>
    // </div>
  );
};

export default ErrorModal;
