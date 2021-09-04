import { useSelector, useDispatch } from 'react-redux';
import { contactsSlice, filterContact } from '../../redux/reducer';
import { filterContactOperation } from '../../redux/actions';
import { getVisibleContacts } from '../../redux/contacts-selectors';

import PropTypes from 'prop-types';
import s from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.contacts);

  const handleChange = e => {
    const { value } = e.target;
    /* dispatch(filterContactOperation( value )) */
    console.log(`value`, value);
    console.log(`state11`, state);
    /*  dispatch(getVisibleContacts(value)); */
    const filterCont = getVisibleContacts(state.items, value);
    console.log(`filterCont`, filterCont);
    dispatch(filterContact(filterCont));
  };

  return (
    <>
      <h2>Contacts</h2>
      <label className={s.findcontacts}>
        Find contacts by name
        <input
          className={s.findInput}
          type="text"
          name="filter"
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default Filter;
Filter.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
