//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
    res.status(200).json({message: "Get all Contacts"});
};

//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContact = (req, res) => {
    const {name, email, phone} = req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All fields are required");
    }
    res.status(201).json({message: "Create contact"});
};

//@desc Get contact
//@route GET /api/contacts
//@access Public
const getContact = (req, res) => {
    res.status(200).json({message: `Get Contact for ${req.params.id}`});
};

//@desc Update contact
//@route PUT /api/contacts
//@access Public
const updateContact = (req, res) => {
    res.status(200).json({message: `Update Contact for ${req.params.id}`});
};

//@desc Delete contact
//@route DELETE /api/contacts
//@access Public
const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete Contact for ${req.params.id}`});
};





module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};