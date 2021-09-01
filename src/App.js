import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Phonebook from './components/PhoneBook/phoneBook';
import Contacts from './components/Contacts/contacts';
import Filter from './components/Filter/filter';
import { getContactsOperation } from '../src/redux/actions';
import './App.css';
import { contactsSlice } from './redux/reducer';

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.contactsSlice);

  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  const getVisibleContacts = () => {
    if (state.filter) {
      const normalizedFilter = state.filter.toLowerCase();
      console.log(`state.filter`, state);
      return state.items.filter(cont =>
        cont.name.toLowerCase().includes(normalizedFilter),
      );
    }
    return state;
  };

  return (
    <>
      <Phonebook />
      <Filter />
      <Contacts contacts={getVisibleContacts()} />
    </>
  );
}
