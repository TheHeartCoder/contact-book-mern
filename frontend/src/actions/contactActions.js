import axios from 'axios';

import {
  CONTACT_CREATE,
  CONCAT_UPDATE,
  CONTACT_DELETE,
  CONTACT_DELETE_ALL,
  CONTACT_FETCH_ALL,
} from '../constants/contactContsant';

export const createContact = (form) => async (dispatch) => {
  try {
    const { data } = await axios.post('/contact', form);
    dispatch({ type: CONTACT_CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchContacts = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/contact');
    dispatch({ type: CONTACT_FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
