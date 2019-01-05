import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from './types';
import Axios from 'axios';

export const getContactList = () => async dispatch => {
  const res = await Axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};
export const deleteContact = id => async dispatch => {
  // it wont delete becouse it is not on our server so we just catch and send dispatch anyway to delet from the dom
  try {
    await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  }
};
export const addContact = id => async dispatch => {
  const res = await Axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};
export const getContact = id => async dispatch => {
  const res = await Axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};
export const updateContact = () => async dispatch => {
  const res = await Axios.put('//jsonplaceholder.typicode.com/users');
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};
