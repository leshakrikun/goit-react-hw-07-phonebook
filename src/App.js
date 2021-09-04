import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Phonebook from './components/PhoneBook/phoneBook';
import Contacts from './components/Contacts/contacts';
import Filter from './components/Filter/filter';
import './App.css';
import { getContacts } from './redux/reducer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Phonebook />
      <Filter />
      <Contacts />
    </>
  );
}
