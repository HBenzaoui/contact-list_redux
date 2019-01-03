import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from '../actions/types';

const initialState = {
  contactList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contactList: action.payload
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contactList: state.contactList.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contactList: [action.payload, ...state.contactList]
      };
    default:
      return state;
  }
}
