import { createSelector } from '@reduxjs/toolkit';

const selectPhonebook = state => state.phonebook;

export const selectContacts = createSelector(
  selectPhonebook,
  phonebook => phonebook.contacts
);
export const selectContactsIsLoading = createSelector(
  selectPhonebook,
  phonebook => phonebook.isLoading
);
export const selectContactsError = createSelector(
  selectPhonebook,
  phonebook => phonebook.error
);
export const selectContactsFilterTerm = createSelector(
  selectPhonebook,
  phonebook => phonebook.filterTerm
);

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    if (!contacts) return;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  }
);
