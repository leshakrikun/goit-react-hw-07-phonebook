import { addContacts } from '../../redux/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/reducer';
import { contacts, filteredContacts } from '../../redux/contacts-selectors';

import s from './contacts.module.css';

const Contacts = () => {
  const state = useSelector(state => contacts(state));
  /* const { items} = state;
  console.log(`contacts13`, items);
  console.log(`contacts14`, state); */
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    console.log('id', id);
    dispatch(deleteContacts(id));
  };

  return (
    <>
      {state?.length > 0 && (
        <div className={s.contactListformat}>
          <ul className={s.contactList}>
            {state.map(({ id, name, number }) => (
              <li key={id}>
                {name}: {}
                {number}
                <button
                  type="button"
                  className={s.contactItem__btn}
                  onClick={() => handleDeleteContact(id)}
                >
                  Удалить
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default Contacts;
