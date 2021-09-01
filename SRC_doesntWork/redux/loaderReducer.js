import { fetchStart, fetchFinish } from './actions';

export const loaderReducer = (state = false, { type, payload }) => {
  switch (type) {
    case fetchStart:
      console.log(22);
      return { loader: true };
    case fetchFinish:
      console.log(23);
      return { loader: false };
    default:
      return state;
  }
};
