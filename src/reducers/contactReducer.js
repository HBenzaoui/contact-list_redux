import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from '../actions/types';

const initialState = {
  contactList: [
    {
      id: 1,
      name: 'Hamza',
      email: 'Hamzapdd@gmail.com',
      phone: '0661 45 81 97'
    },
    {
      id: 2,
      name: 'Bilal',
      email: 'bilal@gmail.com',
      phone: '0770 75 41 47'
    },
    {
      id: 3,
      name: 'Moha',
      email: 'info@yahoo.com',
      phone: '0550 00 00 00'
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
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
