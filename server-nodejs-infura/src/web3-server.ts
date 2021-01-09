

import { swapDAIToETH } from './swap-dai-to-eth';
import { swapETHToDAI } from './swap-eth-to-dai';
import { UniSwapService } from './uniswap-service';
// import { Web3Service } from './web3-service'
// import { Web3Service } from './web3-service-double'
import { Web3Service } from './web3-service'
const cors = require('cors');

const fs = require('fs-sync')
const http = require('http');
const https = require('https');
const express = require('express');
const app = express();
app.use(cors('*'));
let expressServer
let useHTTPS = true
let credentials

try {
    const cert = fs.read('/etc/letsencrypt/live/openforce.de/fullchain.pem', 'utf8');
    const key = fs.read('/etc/letsencrypt/live/openforce.de/privkey.pem', 'utf8');
    credentials = { cert, key };
} catch (error) {
    useHTTPS = false
}

const infuraProjectId = fs.read(`${__dirname}/../.env`).split('=')[1]

const web3Service = new Web3Service(infuraProjectId)
const uniswapService = new UniSwapService()

app.get('/', (req, res) => {
    res.send('hello blockchain world - we love distributed ledgers')
})

defineStandardRoutesWeb3JS(app)

defineKlopapierSpecificRoutesWeb3JS(app)

defineStandardRoutesUniswap(app)

if (useHTTPS) {
    expressServer = https.createServer(credentials, app);
    console.log('your web3 server is listening on https://openforce.de:443')
    expressServer.listen(443);
} else {
    expressServer = http.createServer(app);
    console.log('your web3 server is listening on http://localhost:3001')
    expressServer.listen(3001);
}








/************************************************ Details ************************************************/


function defineStandardRoutesWeb3JS(app) {
    // http://localhost:3001/getBalance/walletAddress/0x1eB9426F329d46f5Ee2263C030d6E9661f2ca694
    // https://openforce.de/getBalance/walletAddress/0x1eB9426F329d46f5Ee2263C030d6E9661f2ca694
    app.get('/getBalance/walletAddress/:account', async (req, res) => {
        res.send(await web3Service.getBalanceInEther(req.params.account))
    })

    // http://localhost:3001/getGasPriceInEther
    // https://openforce.de/getGasPriceInEther
    app.get('/getGasPriceInEther', async (req, res) => {
        // res.send(await web3Service.getGasPriceInEther())
    })

    // http://localhost:3001/getPrice
    // https://openforce.de/getPrice
    app.get('/getPrice', async (req, res) => {
        res.send(await web3Service.getPrice())
    })

    // http://localhost:3001/api/v1/getCryptoAssetPrices
    // https://openforce.de/api/v1/getCryptoAssetPrices
    app.get('/api/v1/getCryptoAssetPrices', async (req, res) => {
        res.send(await web3Service.getPrice())
    })

    // http://localhost:3001/getERC20Balance/walletAddress/0x4396A292512AA418087645B56a3a76333Bd10e28/smartContractAddress/0xE5127cF21fb96A6241067Aa43E242a8D056bD729
    // https://openforce.de/getERC20Balance/walletAddress/0x4396A292512AA418087645B56a3a76333Bd10e28/smartContractAddress/0xE5127cF21fb96A6241067Aa43E242a8D056bD729
    app.get('/getERC20Balance/walletAddress/:walletAddress/smartContractAddress/:smartContractAddress', async (req, res) => {
        // res.send(await web3Service.getERC20Balance(req.params.walletAddress, req.params.smartContractAddress))
    })
}

function defineKlopapierSpecificRoutesWeb3JS(app) {

    // http://localhost:3001/buyWipePaper/walletAddress/xy/amount/5
    app.get('/buyWipePaper/walletAddress/:walletAddress/amount/:amount', async (req, res) => {
        const txHash = await swapETHToDAI(req.params.walletAddress, req.params.amount)
        res.send(`https://etherscan.io/tx/${txHash}`)
    })
    
    // http://localhost:3001/sellWipePaper/walletAddress/xy/amount/5
    app.get('/sellWipePaper/walletAddress/:walletAddress/amount/:amount', async (req, res) => {
        // const txHash = await swapDAIToETH(req.params.walletAddress, req.params.amount)
        const txHash = await swapDAIToETH(req.params.walletAddress, undefined)
        res.send(`https://etherscan.io/tx/${txHash}`)
    })

    // // the following APIs are contract-specific and shall be moved to a dedicated express app one day
    // app.post('/buyWipePaper/walletAddress/:walletAddress/amount/:amount', async (req, res) => {
    //     // await web3Service.buyWipePaper(req.params.walletAddress, req.params.amount)

    //     const txHash = await swapETHToDAI(req.params.walletAddress, req.params.amount)
    //     res.send(`https://etherscan.io/tx/${txHash}`)
    // })

    // app.post('/sellWipePaper/walletAddress/:walletAddress/amount/:amount', async (req, res) => {
    //     // await web3Service.sellWipePaper(req.params.walletAddress, req.params.amount)
    //     const txHash = await swapDAIToETH(req.params.walletAddress, req.params.amount)
    //     res.send(`https://etherscan.io/tx/${txHash}`)
    // })


}
function defineStandardRoutesUniswap(app) {

    // http://localhost:3001/getTokenViaUniswap/smartContractAddress/0xE5127cF21fb96A6241067Aa43E242a8D056bD729
    // https://openforce.de/getTokenViaUniswap/smartContractAddress/0xE5127cF21fb96A6241067Aa43E242a8D056bD729
    app.get('/getTokenViaUniswap/smartContractAddress/:smartContractAddress', async (req, res) => {
        res.send(await uniswapService.getToken(req.params.smartContractAddress))
    })

    // http://localhost:3001/getPairViaUniswap/smartContractAddress/0xE5127cF21fb96A6241067Aa43E242a8D056bD729
    // https://openforce.de/getPairViaUniswap/smartContractAddress/0xE5127cF21fb96A6241067Aa43E242a8D056bD729
    app.get('/getPairViaUniswap/smartContractAddress/:smartContractAddress', async (req, res) => {
        res.send(await uniswapService.getPairViaUniswap(req.params.smartContractAddress))
    })

}