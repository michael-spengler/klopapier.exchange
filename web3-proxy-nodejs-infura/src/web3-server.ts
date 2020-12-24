import { Web3Service } from './web3-service'
const fs = require('fs-sync')

const http = require('http');
const https = require('https');

let useHTTPS = true
let credentials

try {
    const cert = fs.read('/etc/letsencrypt/live/openforce.de/fullchain.pem', 'utf8');
    const key  = fs.read('/etc/letsencrypt/live/openforce.de/privkey.pem', 'utf8');
    credentials = {cert, key};
} catch(error) {
    useHTTPS = false
}
    
const express = require('express');
const app = express();

let expressServer

const infuraProjectId = fs.read(`${__dirname}/../.env`).split('=')[1]

const web3Service = new Web3Service(infuraProjectId)

app.get('/', (req, res) => {
    res.send('hello world')
})

// http://localhost:3001/getBalance/walletAddress/0x4396a292512aa418087645b56a3a76333bd10e28
app.get('/getBalance/walletAddress/:account', async (req, res) => {
    res.send(await web3Service.getBalanceInEther(req.params.account))
})

app.post('/buyWipePaper/amount/:amount', async (req, res) => {
    await web3Service.buyWipepaper(req.parameters.amount)
    res.send('to be implemented')
})

app.post('/sellWipePaper/amount/:amount', async (req, res) => {
    await web3Service.sellWipepaper(req.parameters.amount)
    res.send('to be implemented')
})


if (useHTTPS) {
    expressServer = https.createServer(credentials, app);
    console.log('your web3 server is listening on https://openforce.de:443')
    expressServer.listen(443);
} else {
    expressServer = http.createServer(app);
    console.log('your web3 server is listening on http://localhost:3001')
    expressServer.listen(3001);
}

