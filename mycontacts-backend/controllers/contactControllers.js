import asyncHandler from "express-async-handler";
import contacts from "../modals/contactModal.js"
//@desc GET all contacts
//@route GET /api/contacts
//@access public


const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get All contacts!" });
});

//@desc GET specific contacts
//@route GET /api/contacts/:id
//@access public

const getSpecificContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get specific contact!" });
});

//@desc create new  contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are mandetory!!");
  }

  res.status(201).send(name);
});

//@desc "Update exiting contact!"
//@route PUT /api/contacts/:id
//@access public

const UpdateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update exiting contact!" });
});

//@desc "Delete existing contact!"
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete existing contact!" });
});

export {
  getContact,
  getSpecificContact,
  createContact,
  UpdateContact,
  deleteContact,
};
