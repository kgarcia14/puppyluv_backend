'use strict';

const express = require('express'),
    router = express.Router(),
    puppyModel = require('../models/puppyModel')


router.get('/', async(req, res) => {
    const puppyData = await puppyModel.getAll();
    res.json(puppyData).status(200);

});
router.get('/user_profile', async(req, res) => {
    const { user_profile } = req.params;
    const profile = await puppyModel.getAll(user_profile);
    if (profile) {
        res.json(profile).status(200);
    } else {
        res.status(400).status;
    }
});

router.post('/add', async(req, res) => {
    const { pet_name, pet_image } = req.body;
    console.log('reqBody: ', req.body);
    const response = await puppyModel.addEntry(pet_name, pet_breed, pet_age, gender, pet_personality, pet_image);
    console.log("Post data response is:", response);
    if (response.rowCount >= 1) {
        res.redirect('/user_profile')
    } else {
        res.sendStatus(500)
    }
});
module.exports = router;