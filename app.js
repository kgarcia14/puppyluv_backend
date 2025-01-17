'use strict';

const http = require('http');
// const dotenv = require('dotenv');
// dotenv.config();
const hostname = '127.0.0.1';
const port = '3333';
// const port = process.env.PORT;
const cors = require('cors');


const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});

const rootController = require('./routes/index'),
    puppyController = require('./routes/puppy');
// usersController = require('./routes/users');

app.use('/', rootController);
app.use('/puppy', puppyController);
// app.use('/users', usersController);