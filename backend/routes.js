const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Employee = require('./employee.js');

// GET API BY ID
router.get('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        Employee.findById(req.params.id)
        .then((doc) => {
            res.send(doc);
        })
        .catch((err) => {
            console.log('Error in GET Employee by ID data' + err);
        })
    }
    else{
        res.status(400).send(`No record found for ID ${req.params.id}`);
    }
});
router.get('/', (req, res) => {
    Employee.find()
    .then((doc) => {
        res.send(doc);
    })
    .catch((err) => {
        console.log('Error in GET data' + err);
    })
});

// POST API
router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept,
        mobile: req.body.mobile,
        email: req.body.email,
    });
    // console.log(emp);
    emp.save()
    .then((doc) => {
        res.send(doc);
    })
    .catch((err) => {
        console.log('Error in POST data' + err);
    })
});

//DELETE API
router.delete('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        Employee.findByIdAndDelete(req.params.id)
        .then((doc) => {
            res.send(doc);
        })
        .catch((err) => {
            console.log('Error in DELETE Employee by ID data' + err);
        })
    }
    else{
        res.status(400).send(`No record found for ID ${req.params.id}`);
    }
});

//PUT API
router.put('/:id', (req, res) => {
    let emp = {
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept,
        mobile: req.body.mobile,
        email: req.body.email
    }
    if(ObjectId.isValid(req.params.id)){
        Employee.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true})
        .then((doc) => {
            res.send(doc);
        })
        .catch((err) => {
            console.log('Error in PUT Employee by ID data' + err);
        })
    }
    else{
        res.status(400).send(`No record found for ID ${req.params.id}`);
    }
});

module.exports = router;