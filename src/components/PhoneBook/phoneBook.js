import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSlice } from '../../redux/reducer';
import {
  postContactsOperation,
  getContactsOperation,
} from '../../redux/operations';
import s from './phonebook.module.css';

const Phonebook = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = state;

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  /* const handleChange = (event) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  }; */

  const handleSubmit = e => {
    e.preventDefault();
    console.log('contacts', contacts);

    /*    const result = contacts.find(state  => name === state.name ); 
    if(result){
      alert(name + ` is already in contact`)
    } */
    /* else  {*/

    /* dispatch(contactsSlice.actions.addContacts({name, number, id: uuidv4()})) */
    dispatch(postContactsOperation({ name, number, id: uuidv4() }));
    dispatch(getContactsOperation());
    /* }  */
    setName('');
    setNumber('');
  };

  return (
    <div className={s.phonebook}>
      <h2>Phonebook</h2>
      <div className={s.formPhoneBook}>
        <p>Name</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <p>Number</p>
          <input
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button type="submit" className={s.phoneBookButton}>
            Add contact
          </button>
        </form>
      </div>
    </div>
  );
};
export default Phonebook;
