const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts =asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get all Contacts"});
});

//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContact =asyncHandler(async (req, res) => {
    const {name, email, phone} = req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All fields are required");
    }
    res.status(201).json({message: "Create contact"});
});

//@desc Get contact
//@route GET /api/contacts
//@access Public
const getContact =asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get Contact for ${req.params.id}`});
});

//@desc Update contact
//@route PUT /api/contacts
//@access Public
const updateContact =asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Contact for ${req.params.id}`});
});

//@desc Delete contact
//@route DELETE /api/contacts
//@access Public
const deleteContact =asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Contact for ${req.params.id}`});
});





module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};