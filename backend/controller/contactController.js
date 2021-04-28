import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import Contact from '../model/contactModel.js';

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phoneNo1, phoneNo2, address, selectedImage } = req.body;

  const newContact = new Contact({
    name,
    email,
    phoneNo1,
    phoneNo2,
    address,
    selectedImage,
  });

  try {
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

export { createContact };
