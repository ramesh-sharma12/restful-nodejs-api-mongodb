var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

//GET all Customer
router
    .route('/')
    .get(function (req, res, next) {
        mongoose
            .model('Customer')
            .find({})
            .populate('contactInfos')
            .exec(function (err, customers) {
                if (err) {
                    return console.error(err);
                } else {
                    // respond to both HTML and JSON. JSON responses require 'Accept:
                    // application/json;' in the Request Header
                    var data = [];
                    customers.forEach(function (item) {
                        var obj = {
                            fName: item.fName,
                            lName: item.lName,
                            birthdate: item.birthdate,
                            aptNo: item.contactInfo.aptNo,
                            streetName: item.contactInfo.streetName,
                            mobileNo: item.contactInfo.mobileNo,
                            email: item.contactInfo.email
                        }
                        data.push(obj);
                    })

                    res.json(data);
                }
            });;
    });

//GET single Customer
router
    .route('/:id')
    .get(function (req, res, next) {
        mongoose
            .model('Customer')
            .findById(req.id)
            .populate('contactInfos')
            .exec(function (err, customer) {
                if (err) {
                    return console.error(err);
                } else {
                    // respond to both HTML and JSON. JSON responses require 'Accept:
                    // application/json;' in the Request Header
                    var obj = {
                        fName: customer.fName,
                        lName: customer.lName,
                        birthdate: customer.birthdate,
                        aptNo: customer.contactInfo.aptNo,
                        streetName: customer.contactInfo.streetName,
                        mobileNo: customer.contactInfo.mobileNo,
                        email: customer.contactInfo.email
                    }

                    res.json(obj);
                }
            });
    });

module.exports = router;
