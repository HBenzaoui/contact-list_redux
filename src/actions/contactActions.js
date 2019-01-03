import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';

export const getContactList = () => {
  return {
    type: GET_CONTACTS
  };
};
export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};
export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    paylaod: contact
  };
};
