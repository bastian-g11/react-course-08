import { useState, useRef } from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Modal from "../../UI/Modal/Modal";
import styles from "./UserForm.module.css";

const UserForm = ({ onAddUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState({ title: "", message: "" });
  const [showModal, setShowModal] = useState(false);

  const formSubmitHandler = (event) => {
    console.log(nameInputRef);
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age. Not empty values",
      });
      setShowModal(true);

      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      setShowModal(true);

      return;
    }

    onAddUser(enteredName, enteredAge);
    setEnteredAge("");
    setEnteredName("");
  };

  const nameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setError(true);
    }

    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setError(true);
    }
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <Input
            name="username"
            value={enteredName}
            label="Username"
            type="text"
            onChange={nameChangeHandler}
            inputRef={nameInputRef}
          />
          <Input
            name="age"
            value={enteredAge}
            label="Age (Years)"
            type="number"
            onChange={ageChangeHandler}
            inputRef={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
