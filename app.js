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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});

const rootController = require('./routes/index'),
    puppyController = require('./routes/puppy'),
    usersController = require('./routes/users'),
    favoritesController = require('./routes/favorites'),
    filterController = require('./routes/filter'),
    userIdController = require('./routes/user_id'),
    pConnectionsController = require('./routes/pConnections');

app.use('/', rootController);
app.use('/puppy', puppyController);
app.use('/users', usersController);
app.use('/favorites', favoritesController);
app.use('/user_id', userIdController);
app.use('/filter', filterController);
app.use('/pConnections', pConnectionsController);