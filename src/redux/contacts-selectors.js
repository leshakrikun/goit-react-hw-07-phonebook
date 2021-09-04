export const getVisibleContacts = (state, value) => {
  if (value) {
    const normalizedFilter = value.toLowerCase();
    return state.filter(cont =>
      cont.name.toLowerCase().includes(normalizedFilter),
    );
  }
  return state.contacts;
};

export const contacts = state => getVisibleContacts(state);
