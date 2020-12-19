# Toiletpaper Trading Platform

## Goal of this project
Education around browserwallets (e.g. metamask / brave.com), currencies & decentralization.


## Assets
Smart Contract USDWipePaper
https://etherscan.io/tx/0xd9d0071efc972db68ceb7d066ca332d6754159d86e521034ce3803c7ce6467cd

Smart Contract EURWipePaper
https://etherscan.io/tx/0x1a19c41918d5301f83d3c45ea2636fd059a727ab002c9958e5676ff38ce806fd

## Networks
### Ethereum
https://klopapier.exchange/ --> Leveraging Ethereum


### Arweave
https://toiletpaper.exchange/ --> Leveraging Arweave PST

Idea: weekly we mint 1 new token --> release 1 Klopapier Rolle per week.

## DNS
reserved klopapier.crypto additionally to klopapier.eth
https://unstoppabledomains.com/r/2754c1dccd8a4de


## Frontend
Under construction --> we use [vue](https://cli.vuejs.org/) to develop our client code.  

If you are completely new to nodejs and vue you might try the following steps on your machine.  

1. install [NodeJS](https://nodejs.org/en/)
2. install vue via the following command ```npm install -g @vue/cli```
3. vue create client 
4. cd client
5. npm run serve
6. visit http://localhost:8080/

Tipp: I use VS Code Insiders as my IDE. Installing the following extension might also be valuable to you: wscats.vue

### Using GitHub Pages

**IP Addresses:**  
185.199.108.153  
185.199.109.153  
185.199.110.153  
185.199.111.153  

https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site

**vue.config.js**
```
module.exports = {
    publicPath: "/serve-vue-app",
    outputDir: "../docs"
  };
```

--> run npm run serve after this file update and visit: http://localhost:8080/serve-vue-app/   

details see https://blog.usmanity.com/serving-vue-js-apps-on-github-pages/



## Backend
Under construction --> probably we'll use Smart Contracts + Deno & Web3  

**Links which might be helpful**
1. https://github.com/useverto/trading-post/blob/master/src/workflows/swap.ts  
2. https://docs.chain.link/docs/ethereum-addresses    
3. Video on a chainlink based Dapp: https://www.youtube.com/watch?v=YLmMNocc1ys  
4. Off-Chain data provisioning and inter-blockchain interoperability: https://www.youtube.com/watch?v=-pUR9WPIrX0



## Feedback & Contact
In case of any feedback, please raise an issue on this repository.