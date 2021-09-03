import { createSelector } from 'reselect';

export const contacts = state => state.contacts.items;
console.log(100, contacts);
export const filteredContacts = createSelector(
  [contacts],
  search => [...search].filter,
);
