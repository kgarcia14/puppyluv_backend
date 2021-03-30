'use strict';

const express = require('express'),
    router = express.Router(),
    favoritesModel = require('../models/favoritesModel')

router.get('/', async(req, res) => {
    const favoritesData = await favoritesModel.getAll();

    res.json(favoritesData).status(200);
});

router.get('/liked_users', async(req, res) => {
    const { liked_users } = req.params;
    console.log(reg.params)
    const favorites = await favoritesModel.getByFavorites(liked_users);

    if (favorites) {
        res.json(favorites).status(200);
    } else {
        res.status(400).send(`No liked_users here`)
    }
});

router.post('/add', async(req, res) => {
    const { liked_users } = req.body;
    console.log('reqBody:', req.body);
    const response = await favoritesModel.addEntry(liked_users);
    if (response.rowCount >= 1) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }

});



module.exports = router;