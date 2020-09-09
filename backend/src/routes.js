const express = require('express');

const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const LikesController = require('./controllers/LikesController');
const StarsController = require('./controllers/StarsController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/users', UserController.index );
routes.post('/users', UserController.create);
routes.delete('/users', UserController.delete);

routes.post ('/posts', PostController.create);
routes.get ('/posts', PostController.index);
routes.delete('/posts/:id', PostController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/likes', LikesController.create);
routes.delete('/likes', LikesController.delete);
routes.get('/likes', LikesController.index);


routes.post('/stars', StarsController.create);
routes.delete('/stars', StarsController.delete);
routes.get('/stars', StarsController.index);

module.exports = routes;