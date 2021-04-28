import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
  name: String,
  email: String,
  phoneNo1: String,
  phoneNo2: String,
  address: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
