import { useSelector, useDispatch } from 'react-redux';
import { contactsSlice } from '../../redux/reducer';
import { filterContactOperation } from '../../redux/actions';
import PropTypes from 'prop-types';
import s from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.contactsSlice);
  const handleChange = e => {
    const { value } = e.target;
    /* dispatch(filterContactOperation( value )) */
    console.log(`value`, value);
    dispatch(filterContactOperation(value));
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
