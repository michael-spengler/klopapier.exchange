import * as brain from 'brain.js'
import { testData } from './test-data';

const express = require('express');
const app = express();


const config = {
  inputSize: 20,
  inputRange: 20,
  hiddenLayers: [20, 20],
  outputSize: 20,
  learningRate: 0.01,
  decayRate: 0.999,
};

const net = new brain.recurrent.RNN(config);

let recentDirectionOfEtherPrice
let previousEtherPrice
let previousBTCPrice
let counter = 0

let trainingArray = []
for (const e of testData.pricesWithoutWarranty) {

  if (counter > 0 && counter < 100) {
    if (previousEtherPrice === e.ETHPrice) {
      console.log('ups')
      continue
    }
    if (previousEtherPrice < e.ETHPrice) {
      recentDirectionOfEtherPrice = 1
    } else if (previousEtherPrice > e.ETHPrice) {
      recentDirectionOfEtherPrice = 0
    }

    const tE = { input: [previousBTCPrice, previousEtherPrice], output: [recentDirectionOfEtherPrice] }
    trainingArray.push(tE)

  }

  counter++
  previousEtherPrice = e.ETHPrice
  previousBTCPrice = e.BTCPrice
}


console.log(testData.pricesWithoutWarranty.length)
console.log(JSON.stringify(trainingArray))

net.train(trainingArray, {})

console.log('training is complete')
checkHowOftenRightVSWrong()

function checkHowOftenRightVSWrong() {
  
  let validationCounter = 0
  let numberOfCorrectGuesses = 0
  let numberOfWrongGuesses = 0
  previousEtherPrice = 0
  previousBTCPrice = 0
  
  for (const eV of testData.pricesWithoutWarranty) {
    
    if (previousEtherPrice > 0 && validationCounter < 50) {
      
      let output = net.run([previousBTCPrice, previousEtherPrice])
      
      console.log(`estimate for ${previousBTCPrice} and ${previousEtherPrice}: ${output}`)
      
      let optimalGuess = (previousEtherPrice <= eV.ETHPrice) ? 1 : 0
      console.log(`real for ${previousBTCPrice} and ${previousEtherPrice}: ${optimalGuess}`)
      
      if (optimalGuess == output) {
        numberOfCorrectGuesses++
      } else {
        numberOfWrongGuesses++
      }
     
    }
    previousBTCPrice = eV.BTCPrice
    previousEtherPrice = eV.ETHPrice
    validationCounter++
  }

  console.log(`numberOfCorrectGuesses: ${numberOfCorrectGuesses}`)
  console.log(`numberOfWrongGuesses: ${numberOfWrongGuesses}`)

}

app.get('/getGuess/btc/:btc/eth/:eth', (req, res) => {
  console.log(req.params.btc)
  let guess = net.run([req.params.btc, req.params.eth])
  res.send(guess)
})

// http://localhost:3027/getGuess/btc/40000/eth/10000
app.listen(3027)


    // net.train([
  //   { input: [0, 0], output: [0] },
  //   { input: [0, 1], output: [1] },
  //   { input: [1, 0], output: [1] },
  //   { input: [1, 1], output: [0] },
  // ], {});

  // let output = net.run([0, 0]); // [0]
  // console.log(output)
  // output = net.run([0, 1]); // [1]
  // console.log(output)
  // output = net.run([1, 0]); // [1]
  // console.log(output)
  // output = net.run([1, 1]); // [0]
  // console.log(output)
