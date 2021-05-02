import React, { useState } from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import ContactTable from '../components/ContactTable';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../actions/contactActions';

const Contact = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useState(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <ContactForm
        open={open}
        handleClose={handleClose}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <ContactTable
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        setCurrentId={setCurrentId}
      />
    </div>
  );
};

export default Contact;
