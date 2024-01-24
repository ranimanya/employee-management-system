const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', {
    name: {type: String},
    position: {type: String},
    dept: {type: String},
    mobile: {type: String},
    email: {type: String}
})

module.exports = Employee;