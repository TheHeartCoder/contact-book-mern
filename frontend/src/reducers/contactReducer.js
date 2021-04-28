import {
  CONTACT_CREATE,
  CONCAT_UPDATE,
  CONTACT_DELETE,
  CONTACT_DELETE_ALL,
  CONTACT_FETCH_ALL,
} from '../constants/contactContsant';

export const contactReducer = (contacts = [], action) => {
  switch (action.type) {
    case CONTACT_FETCH_ALL:
      return action.payload;
    case CONTACT_CREATE:
      return [...contacts, action.payload];
    default:
      return contacts;
  }
};

/**
 *
 *
 *
 *
 */
