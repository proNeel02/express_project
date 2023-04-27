import express from "express";
import { UpdateContact, createContact, deleteContact, getContact, getSpecificContact } from "../controllers/contactControllers.js";
const router = express.Router();


// get all contacts
router.route('/').get(getContact).post(createContact);
// get specific contact
router.route('/:id').get(getSpecificContact).put(UpdateContact).delete(deleteContact);

export default router;