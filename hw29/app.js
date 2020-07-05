const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

/*app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index2.html'));
});*/

app.get('/index.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.js'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.resolve(__dirname, './style.css'));
});

app.listen(4040, () => console.log('App listening on port 4040'));
