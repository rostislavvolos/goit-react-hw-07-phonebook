import { useState, useEffect } from "react";
import style from "./FormStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getItems,
  getContactForEdit,
} from "../../redux/contacts/PhonebookSelector";
import {
  addContact,
  editContact,
} from "../../redux/contacts/PhonebookOperations";

// const initialState = {
//   number: "",    
//   name:"",
// }
const Form = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  const [contact, setContact] = useState({ name: "", number: "" });
  const { name, number } = contact;
  const contactForEdit = useSelector(getContactForEdit);

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (
      items.some(
        (item) => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert("Контакт с таким именем уже существует!");
      setContact({ ...contact, name: "" });
    } else {
      contactForEdit
        ? dispatch(editContact(contact))
        : dispatch(addContact(contact));
      setContact({ name: "", number: "" });
    }
  };

  useEffect(() => {
    contactForEdit
      ? setContact(contactForEdit)
      : setContact({ name: "", number: "" });
  }, [contactForEdit]);

  return (
    <form onSubmit={onHandleSubmit} action="">
      <p className={style.nameTitle}>Name</p>
      <label>
        <input
          name="name"
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onInputChange}
        />
      </label>
      <p className={style.numberTitle}>Number</p>
      <label htmlFor="">
        <input
          name="number"
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onInputChange}
        />
      </label>
      <div>
        <button type="submit" className={style.button}>
          Add contact
        </button>
      </div>
    </form>
  );
};

export default Form;
