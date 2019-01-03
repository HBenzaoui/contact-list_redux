import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';
import Axios from 'axios';

export const getContactList = () => async dispatch => {
  const res = await Axios.get('//jsonplaceholder.typicode.com/users');

  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
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
    payload: contact
  };
};
