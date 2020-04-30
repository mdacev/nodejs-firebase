const { Router } = require('express');
const router = Router();

const { getContacts, createContact, deleteContact  } = require('../controllers/contact.controller');

router.route('/')
    .get(getContacts)
    
router.route('/new-contact')
    .post(createContact)

router.route('/delete-contact/:id')
    .get(deleteContact)




module.exports = router;
