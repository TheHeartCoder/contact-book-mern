import express from 'express';
const router = express.Router();
import {
  createContact,
  getContacts,
  deleteContact,
  deleteMultiContacts,
  updateContact,
} from '../controller/contactController.js';

router.route('/').post(createContact);
router.route('/').get(getContacts);
router.route('/:id').delete(deleteContact).put(updateContact);
router.route('/delete').post(deleteMultiContacts);

export default router;
