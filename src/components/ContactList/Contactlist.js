import styles from "./ContactList.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredContactsMemo,
} from "../../redux/contacts/PhonebookSelector";
import { getContacts } from "../../redux/contacts/PhonebookOperations";
import { removeContact } from "../../redux/contacts/PhonebookOperations";
import { editOnClick } from "../../redux/contacts/PhonebookSlicer";

function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContactsMemo);
  const deleteContact = (id) => dispatch(removeContact(id));

  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <div>
       <ul>
      {filteredContacts.map(({ id, name, number }) =>
        name ? (
          <li className={styles.theloop} key={id}>
            <p className={styles.text}>{name}</p>
            <p className={styles.txt}>{number}</p>
            <button className={styles.btn} onClick={() => deleteContact(id)}>
              Remove
            </button>
            <button
              className={styles.btn}
              onClick={() => dispatch(editOnClick({ id, name, number }))}
            >
              Edit
            </button>
          </li>
        ) : null
      )}
    </ul>
    </div>
  );
}

export default ContactList;
