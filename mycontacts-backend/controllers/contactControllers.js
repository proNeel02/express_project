//@desc GET all contacts
//@route GET /api/contacts
//@access public

const getContact = (req,res) => {
    res.status(200).json( { message: "Get All contacts!" } );
}

//@desc GET specific contacts
//@route GET /api/contacts/:id
//@access public

const getSpecificContact = (req,res) => {
    res.status(200).json( { message: "Get specific contact!" } );
}


//@desc create new  contacts
//@route POST /api/contacts
//@access public

const createContact =(req,res) => {


    const { name, email, phone } = req.body;

    if( !name || !email || !phone ) {
        res.status(400);
        throw new Error("All Fields are mandetory!!");
    }



    res.status(201).send(name);
}

//@desc "Update exiting contact!"
//@route PUT /api/contacts/:id
//@access public

const UpdateContact = (req,res) => {
    res.status(200).json( { message: "Update exiting contact!" } );
}

//@desc "Delete existing contact!"
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req,res) => {
    res.status(200).json( { message: "Delete existing contact!" } );
}



export { getContact, getSpecificContact, createContact,UpdateContact,deleteContact};