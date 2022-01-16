



import Form from '../components/form-section/form';
import FilterList from '../components/FilterList/FilterList';
import ContactList from '../components/ContactList/Contactlist';
// import FilterList from '../components/FilterList/FilterList';

const Phonebook = () => {

  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <Form/>
        <h2>Contacts</h2>
        <FilterList />
      </div>
        <ContactList />
    </div>
  );
};

export default Phonebook;


