const express = require('express'),
    router = express.Router(),
    filterModel = require('../models/filterModel');

router.get('/:filter', async (req, res) => {
    const { filter } = req.params;
    console.log(filter)
    if (filter === '1820') {
        const user = await filterModel.getFilteredAge1820(filter);
        if (user) {
            res.json(user).status(200);
        } else {
            res.status(404).send(`No users in that age group`)
        }
    }
    if (filter === '2025') {
        const user = await filterModel.getFilteredAge2025(filter);
        if (user) {
            res.json(user).status(200);
        } else {
            res.status(404).send(`No users in that age group`)
        }
    }
    if (filter === '2530') {
        const user = await filterModel.getFilteredAge2530(filter);
        if (user) {
            res.json(user).status(200);
        } else {
            res.status(404).send(`No users in that age group`)
        }
    }
    if (filter === '3035') {
        const user = await filterModel.getFilteredAge3035(filter);
        if (user) {
            res.json(user).status(200);
        } else {
            res.status(404).send(`No users in that age group`)
        }
    }
    if (filter === '3540') {
        const user = await filterModel.getFilteredAge3540(filter);
        if (user) {
            res.json(user).status(200);
        } else {
            res.status(404).send(`No users in that age group`)
        }
    }
    if (filter === 'male' || filter === 'female' || filter === 'other') {
        const user = await filterModel.getFilteredGender(filter);
        if (user) {
            res.json(user).status(200);
        } else {
            res.status(404).send(`No users in that gender group`)
        }
    }
    if (filter === 'Atlanta') {
        const user = await filterModel.getFilteredCity(filter);
        if (user) {
            res.json(user).status(200);
        } else {
            res.status(404).send(`No users in that city`)
        }
    }
    if (filter === '0' || filter === '1' || filter === '2' || filter === '3') {
        const user = await filterModel.getFilteredNumbPets(filter);
        if (user) {
            res.json(user).status(200);
        } else {
            res.status(404).send(`No users with that amount of pets`)
        }
    }
    if (filter === '4') {
        const user = await filterModel.getFilteredMoreNumbPets(filter);
        if (user) {
            res.json(user).status(200);
        } else {
            res.status(404).send(`No users with more than three pets`)
        }
    }
    if (filter === 'playful' || filter === 'outgoing' || filter === 'mellow' || filter === 'independent' || filter === 'adaptable' || filter === 'grumpy') {
        const user = await filterModel.getFilteredPetPersonality(filter);
        if (user) {
            res.json(user).status(200);
        } else {
            res.status(404).send(`No users with that pet personality`)
        }
    }
});

module.exports = router;