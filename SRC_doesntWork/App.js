import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Phonebook from './components/PhoneBook/phoneBook';
import Contacts from './components/Contacts/contacts';
import Filter from './components/Filter/filter';
import { getContactsOperation } from '../src/redux/reducer';
import './App.css';
import { contactsSlice } from './redux/reducer';

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.contactsSlice);

  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);
  console.log('state5', state);
  const getVisibleContacts = () => {
    console.log('filter', state);
    /*  if(state.filter){
      const normalizedFilter = state.filter.toLowerCase();
      return (state.contacts.filter(cont =>
        cont.name.toLowerCase().includes(normalizedFilter),
      ))
    } */
    console.log(`state.contactsSlice.contacts`, state);
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
