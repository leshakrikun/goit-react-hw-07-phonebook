import { contactsSlice } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
import s from './contacts.module.css';

const Contacts = ({ contacts }) => {
  console.log(`contacts`, contacts);
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    dispatch(contactsSlice.actions.deleteContact(id));
  };

  return (
    <>
      {contacts?.length > 0 && (
        <div className={s.contactListformat}>
          <ul className={s.contactList}>
            {contacts.map(({ id, name, number }) => (
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
