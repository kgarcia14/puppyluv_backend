const express = require('express'),
    router = express.Router(),
    usersModel = require('../models/usersModel');

    router.get('/:id', async (req, res) => {
        const { id } = req.params;
        console.log(req.params)
        const user = await usersModel.getById(id);
        
        if (user) {
            res.json(user).status(200);
        } else {
            res.status(404).send(`No user by that id here.`)
        }
    });

module.exports = router;