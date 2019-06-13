const express = require('express');
const multer = require('multer');
const uploaderConfig = require('./config/upload');
const PostController = require('./controllers/PostController');

const routes = new express.Router();
const upload = multer(uploaderConfig);

routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;