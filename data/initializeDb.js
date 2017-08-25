var mongoose = require('mongoose');
var Customer = require('../models/customer.js');

var sampleCustomer = new Customer({
    fName: 'Test firt name',
    lName: 'Test Last Name',
    birthdate: new Date(),
    contactInfo: {
        aptNo: '123',
        streetName: 'abc',
        mobileNo: '345345353',
        email: 'test@gmail.com'
    }
});

function initializeDb() {

    sampleCustomer
        .save(sampleCustomer, function (err, post) {
            if (err) 
                return console.log(err);
            
            console.log('Sample customer data inserted...');
        });

}

module.exports = initializeDb;
