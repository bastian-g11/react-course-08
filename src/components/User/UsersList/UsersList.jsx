import UsersListItem from "../UsersListItem/UsersListItem";
import Card from "../../UI/Card/Card";
import styles from "./UsersList.module.css";

const UserList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map(({ id, name, age }) => {
          return (
            <li key={id}>
              <UsersListItem name={name} age={age} />
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
