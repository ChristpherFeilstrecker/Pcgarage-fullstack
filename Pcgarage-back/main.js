
/*
var http = require('http');
const express = require('express');
const app = express();

const port = 21054;
app.listen(port)

const baseDir = `${__dirname}/build/`
app.use(express.static(`${baseDir}`))
app.get('/', (req, res) => res.sendfile('index.html' , { root : baseDir } ))
*/
console.log("iniciando")
require("./build/index")