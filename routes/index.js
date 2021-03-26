'use strict';
const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.json("PuppyLuv").status(200);
})

module.exports = router;