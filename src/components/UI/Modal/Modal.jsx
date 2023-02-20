import { createPortal } from "react-dom";
import Button from "../Button/Button";
import Card from "../../UI/Card/Card";
import styles from "./Modal.module.css";

const Backdrop = ({ onConfirm }) => {
  return <div className={styles.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ title, message, onConfirm }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p className={styles.text}>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const Modal = ({ title, message, onConfirm }) => {
  return (
    <>
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
