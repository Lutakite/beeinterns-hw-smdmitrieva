const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, './script.js'));
});

app.get('/request/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './response.json'))
});

app.post('/request/', (req, res) => {
    setTimeout(() => {
        res.sendFile(path.resolve(__dirname, './response.json'))
    }, 10000);
});

app.get('/serviceavailable/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './response.json'))
});

app.get('/getinfo/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './response_info.json'))
});

app.get('/getdescription/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './response_desc.json'))
});

app.listen(4040, () => console.log('App listening on port 4040'));
