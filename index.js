// Imports
const express = require('express');
const dotenv = require('dotenv').config()
const cookie = require('cookie-parser')
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/resumeBuilder')

const port = 8080;

// Static Flies
app.use(require('body-parser').json())
app.use(cookie())
app.use('/', require('./routes/pages'))
app.use('/api', require('./controller/app'))

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Set Views
app.set('views', './views');
// Set Templates
app.set('view engine', 'ejs');


//Listen the port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})


