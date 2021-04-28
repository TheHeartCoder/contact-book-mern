import express from 'express';
const router = express.Router();
import { createContact } from '../controller/contactController.js';

router.route('/').post(createContact);

export default router;
