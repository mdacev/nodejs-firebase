const contactCrtl = {};
const admin = require('firebase-admin')

var serviceAccount = require('../../nodejs-firebase-191e1-firebase-adminsdk-al18u-0f6f8d53a3.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://nodejs-firebase-191e1.firebaseio.com/'
});

const db = admin.database();


contactCrtl.createContact = async  (req, res) => {
    
    const newContact = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    }
    await db.ref('contacts').push(newContact);
    res.redirect('/');
};

contactCrtl.getContacts = async (req, res)  => {
     await db.ref('contacts').once('value', (snapshot) => {
       data = snapshot.val();
       console.log(`${data}`)
       res.render('index', {contacts: data})
    });
};

contactCrtl.deleteContact = async (req, res) => {
    await db.ref('contacts/' + req.params.id).remove();
    res.redirect('/');
};


module.exports = contactCrtl;