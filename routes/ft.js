const express = require('express'),
    router = express.Router(),
    ftModel = require('../models/ftModel');

router.get('/:user_id', async (req, res) => {
    const { user_id } = req.params;
    console.log(req.params)
    const user = await ftModel.getByUserId(user_id);
    
    if (user) {
        res.json(user).status(200);
    } else {
        res.status(404).send(`No user by that user_nickname here.`)
    }
});

router.post('/add', async(req, res) => {
    const {other_nicknames, user_id} = req.body;
    console.log('reqBody: ', req.body);
    const response = await ftModel.addEntry(other_nicknames, user_id);
    if (response.rowCount >= 1) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
});

module.exports = router;