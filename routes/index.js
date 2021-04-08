'use strict';
const express = require('express'),
    router = express.Router();

const fetch = require('node-fetch');

router.get('/', (req, res) => {
    res.json("PuppyLuv").status(200);
})

router.get('/proxy/:place', async (req, res) => {
    const { place } = req.params;
    const apiKey = process.env.API_KEY
    const mapsUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?radius=10000&language=en&type=park&query=parks+in+${place}&key=${apiKey}`
    const response = await fetch(mapsUrl).then(response => response.json());
    res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.status(200).send(response);
})



module.exports = router;