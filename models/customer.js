var mongoose = require('mongoose');

var contactInfoSchema = new mongoose.Schema({
    id: {
      type: mongoose.Schema.Types.ObjectId
    },
    aptNo: String,
    streetName: String,
    mobileNo: String,
    email: String
  });
  
mongoose.model('ContactInfo', contactInfoSchema);
  
var customerSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    fName: String,
    lName: String,
    birthdate: {
        type: Date,
        default: Date.now
    },
    contactInfoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ContactInfo"
    },
    contactInfo:contactInfoSchema
});

module.exports = mongoose.model('Customer', customerSchema);