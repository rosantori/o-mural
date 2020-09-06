const express = require('express');

const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/users', UserController.index );
routes.post('/users', UserController.create);
routes.delete('/users', UserController.delete);

routes.post ('/posts', PostController.create);
routes.get ('/posts', PostController.index);
routes.delete('/posts/:id', PostController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;