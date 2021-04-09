const express = require('express'),
    router = express.Router(),
    usersModel = require('../models/usersModel');

router.get('/', async(req, res) => {
    const usersData = await usersModel.getAll();

    res.json(usersData).status(200);
});

router.get('/:user_nickname', async(req, res) => {
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
    const { first_name, last_name, age, gender, city, zipcode, user_img, user_email, user_nickname, numb_pets } = req.body;
    console.log('reqBody: ', req.body);
    const response = await usersModel.addEntry(first_name, last_name, age, gender, city, zipcode, user_img, user_email, user_nickname, numb_pets);
    if (response.rowCount >= 1) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
});

router.post('/update/pet1', async (req, res) => {
    const { user_nickname, pet_name1, pet_breed1, pet_age1, pet_personality1 } = req.body;
    console.log('reqBody: ', req.body);
    const response = await usersModel.updatePet1(user_nickname, pet_name1, pet_breed1, pet_age1, pet_personality1);
    if (response) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
});

router.post('/update/pet2', async (req, res) => {
    const { user_nickname, pet_name2, pet_breed2, pet_age2, pet_personality2 } = req.body;
    console.log('reqBody: ', req.body);
    const response = await usersModel.updatePet2(user_nickname, pet_name2, pet_breed2, pet_age2, pet_personality2);
    if (response) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
});
router.post('/update/pet3', async (req, res) => {
    const { user_nickname, pet_name3, pet_breed3, pet_age3, pet_personality3 } = req.body;
    console.log('reqBody: ', req.body);
    const response = await usersModel.updatePet3(user_nickname, pet_name3, pet_breed3, pet_age3, pet_personality3);
    if (response) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
});
router.post('/update/about_us', async(req, res) => {
    const { user_nickname, about_us } = req.body;
    console.log('reqBody: ', req.body);
    const response = await usersModel.updateAboutUs(user_nickname, about_us);
    if (response) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
});

module.exports = router;