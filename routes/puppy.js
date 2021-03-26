'use strict';

const express = require('express'),
    router = express.Router(),
    puppyModel = require('../models/puppyModel')


router.get('/', async(req, res) => {
    const puppyData = await puppyModel.getAll();
    res.json(puppyData).status(200);

});
router.get('/:pet_name', async(req, res) => {
    const { pet_name } = req.params;
    const petName = await puppyModel.getByName(pet_name);
    if (petName) {
        res.json(petName).status(200);
    } else {
        res.status(400);
    }
});
module.exports = router;