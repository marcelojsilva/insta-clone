
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://mj:junior01@cluster0-qrhbh.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);
