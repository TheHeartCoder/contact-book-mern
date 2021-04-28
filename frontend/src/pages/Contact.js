import React, { useState } from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import ContactTable from '../components/ContactTable';

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header />
      <ContactForm open={open} handleClose={handleClose} />
      <ContactTable
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
      />
    </div>
  );
};

export default Contact;
