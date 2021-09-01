import { contactsSlice } from '../../redux/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactOperation } from '../../redux/actions';

import s from './contacts.module.css';

const Contacts = ({ contacts: { items } }) => {
  const state = useSelector(state => state.contactsSlice);

  console.log(`contacts13`, items);
  console.log(`contacts14`, state);
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    dispatch(deleteContactOperation(id));
  };

  return (
    <>
      {items?.length > 0 && (
        <div className={s.contactListformat}>
          <ul className={s.contactList}>
            {items.map(({ id, name, number }) => (
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
