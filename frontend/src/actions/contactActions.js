import axios from 'axios';

import {
  CONTACT_CREATE,
  CONTACT_UPDATE,
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

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/contact/${id}`);
    dispatch({ type: CONTACT_DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContacts = (idArr) => async (dispatch) => {
  try {
    await axios.post(`/contact/delete`, idArr);
    dispatch({ type: CONTACT_DELETE_ALL, payload: idArr });
  } catch (error) {
    console.log(error);
  }
};

export const updateContact = (id, form) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/contact/${id}`, form);
    console.log(data);
    dispatch({ type: CONTACT_UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
