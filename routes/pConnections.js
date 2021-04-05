const express = require('express'),
    router = express.Router(),
    pConnectionsModel = require('../models/pConnectionsModel');

router.get('/:user_nickname', async (req, res) => {
    const { user_nickname } = req.params;
    console.log(req.params)
    const user = await pConnectionsModel.getByUserNickname(user_nickname);
    
    if (user) {
        res.json(user).status(200);
    } else {
        res.status(404).send(`No user by that user_nickname here.`)
    }
});

module.exports = router;