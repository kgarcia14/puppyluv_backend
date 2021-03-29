const express = require('express'),
    router = express.Router(),
    usersModel = require('../models/usersModel');

router.get('/', async (req, res) => {
    const usersData = await usersModel.getAll();

    res.json(usersData).status(200);
});

router.get('/:user_nickname', async (req, res) => {
    const { user_nickname } = req.params;
    console.log(req.params)
    const user = await usersModel.getByUserNickname(user_nickname);
    
    if (user) {
        res.json(user).status(200);
    } else {
        res.status(404).send(`No user by that user_nickname here.`)
    }
});

router.post('/add', async (req, res) => {
    const { first_name, last_name, age, gender, city, zipcode, about_us, user_img, user_nickname, pet_name, pet_breed, pet_age, pet_personality, pet_img } = req.body;
    console.log('reqBody: ', req.body);
    const response = await usersModel.addEntry(first_name, last_name, age, gender, city, zipcode, about_us, user_img, user_nickname, pet_name, pet_breed, pet_age, pet_personality, pet_img);
    if (response.rowCount >= 1) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
});

router.post('/update', async (req, res) => {
    const { user_nickname, about_us, pet_name, pet_breed, pet_age, pet_personality, pet_img } = req.body;
    console.log('reqBody: ', req.body);
    const response = await usersModel.updateEntry(user_nickname, about_us, pet_name, pet_breed, pet_age, pet_personality, pet_img);
    if (response) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
});

module.exports = router;