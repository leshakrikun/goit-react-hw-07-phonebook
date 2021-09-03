import { useSelector, useDispatch } from 'react-redux';
import { contactsSlice } from '../../redux/reducer';
import { filterContactOperation } from '../../redux/actions';
import { getVisibleContacts } from '../../App';

import PropTypes from 'prop-types';
import s from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.contacts.items);
  const handleChange = e => {
    const { value } = e.target;
    /* dispatch(filterContactOperation( value )) */
    console.log(`value`, value);
    dispatch(getVisibleContacts(value));
  };

  const getVisibleContacts = value => {
    if (state?.length > 0) {
      /* console.log(33,state?.items.length); */

      console.log(`state.filter`, state);
      const normalizedFilter = value.toLowerCase();

      return state.filter(cont =>
        cont.name.toLowerCase().includes(normalizedFilter),
      );
    }
    console.log(88, state);
    return state.contacts.items;
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
