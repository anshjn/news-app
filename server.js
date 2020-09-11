const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const getNews = require('./routes/getnews');
const app = express();

const port = process.env.Port || 3000; 

mongoose.connect('mongodb://127.0.0.1:27017/newsfeedly', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(' connected to database');
    })
    .catch(err => {
        console.log(err);
    })

app.use(getNews);
app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log('listening to port: ' + port);
});