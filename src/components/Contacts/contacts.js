import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/reducer';
import { contacts } from '../../redux/contacts-selectors';

import s from './contacts.module.css';
let search = '';
const Contacts = () => {
  const state = useSelector(state => contacts(state));

  if (state.items) {
    search = state.items;
  }
  if (Array.isArray(state.filter)) {
    search = state.filter;
  }

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <>
      {search.length > 0 && (
        <div className={s.contactListformat}>
          <ul className={s.contactList}>
            {search.map(({ id, name, number }) => (
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
