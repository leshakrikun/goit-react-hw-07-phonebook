import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Phonebook from './components/PhoneBook/phoneBook';
import Contacts from './components/Contacts/contacts';
import Filter from './components/Filter/filter';
import { getContactsOperation } from '../src/redux/actions';
import './App.css';
import { getContacts } from './redux/reducer';

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Phonebook />
      <Filter />
      <Contacts /* contacts={getVisibleContacts()} */ />
    </>
  );
}
