import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from '../actions/types';

const initialState = {
  contactList: [],
  contact: {}
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
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contactList: state.contactList.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
}
