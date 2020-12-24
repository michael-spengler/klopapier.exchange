import { Web3Service } from './web3-service'

const express = require('express');
const app = express();

const fs = require('fs-sync')
const infuraProjectId = fs.read(`${__dirname}/.env`).split('=')[1]

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


console.log('your web3 server is listening on http://localhost:3001')
app.listen('3001')