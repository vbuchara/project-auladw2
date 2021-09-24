const express = require('express');
const path = require('path');
const routes = require('./routes/router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/styles', express.static(path.join(__dirname, '../assets/styles/')));
app.use('/imgs', express.static(path.join(__dirname, '../assets/images/')));
app.use('/js', express.static(path.join(__dirname, '../assets/javascripts/')));
app.use('/term.txt', express.static(path.join(__dirname, '../assets/term.txt')));
app.use('/uploads', express.static(path.join(__dirname, '../../uploads/')));

app.set('views', path.join(__dirname, '../pages'));
app.set('view engine', 'pug');

routes(app);

module.exports = app;