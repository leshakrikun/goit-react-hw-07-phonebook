import { fetchError } from './actions';
const initialState = '';

export const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case fetchError:
      return { error: payload };
    default:
      return state;
  }
};
