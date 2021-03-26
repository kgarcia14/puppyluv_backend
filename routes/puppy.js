'use strict';

const express = require('express'),
    router = express.Router(),
    puppyModel = require('../models/puppyModel'),


    router.get('/', async(req, res) => {
        const puppyData = await puppyModel.getAll();

        res.render('template', {
            locals: {
                title: 'Select a Puppy',
                data: puppyData
            },
            patials: {
                body: 'partials/puppy-list'
            }
        })
    })