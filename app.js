const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});

app.get('/babbage', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/babbage.html'))
});

app.get('/barners-lee', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/barners-lee.html'))
});

app.get('/clarke', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/clarke.html'))
});

app.get('/hamilton', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/hamilton.html'))
});

app.get('/hopper', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/hopper.html'))
});

app.get('/lovelace', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/lovelace.html'))
});

app.get('/turing', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/turing.html'))
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
});