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


### Arweave (will be elaborated in a different repo soon)
https://toiletpaper.exchange/ --> Leveraging Arweave PST

Idea: weekly we mint 1 new token --> release 1 Klopapier Rolle per week.

## DNS & ENS
klopapier.crypto (https://unstoppabledomains.com)   
klopapier.eth (https://ens.domains)  



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

## Backend
Under construction --> probably we'll use Smart Contracts + Deno & Web3  

**Links which might be helpful**
1. https://github.com/useverto/trading-post/blob/master/src/workflows/swap.ts  
2. https://docs.chain.link/docs/ethereum-addresses    
3. Video on a chainlink based Dapp: https://www.youtube.com/watch?v=YLmMNocc1ys  
4. Off-Chain data provisioning and inter-blockchain interoperability: https://www.youtube.com/watch?v=-pUR9WPIrX0


## Deployment Options
We need to provide the page and the data to users. Here are some options for those topics.
### Providing the Page
**Option 1: Using GitHub Pages**

**IP Addresses:**  
185.199.108.153  
185.199.109.153  
185.199.110.153  
185.199.111.153  

https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site

**vue.config.js**
```
module.exports = {
    publicPath: "./",
    outputDir: "./docs"
  };
```

--> run npm run serve after this file update and visit: http://localhost:8080   

details see https://blog.usmanity.com/serving-vue-js-apps-on-github-pages/


**Option 2: Using Deno with Opine**
This option would require for a central server on which you could execute the content of [deno-opine-page-server.ts]() via:  
```
deno run --allow-read --allow-net deno-opine-page-server.ts
```

### Providing Data 
We will connect our page with the Ethereum blockchain. Details follow.


## Feedback & Contact
In case of any feedback, please raise an issue on this repository.