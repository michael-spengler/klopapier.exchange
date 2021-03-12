# Klopapier.Exchange

Welcome to the [klopapier.exchange](https://klopapier.exchange).

## Goal of this project
The [klopapier.exchange](https://klopapier.exchange) can be seen as a playful education and exploration game around browserwallets (e.g. metamask / brave.com), currencies & decentralization and web development in general.

## Frontend
Under construction --> we use [vue](https://cli.vuejs.org/) to develop our client code.  

If you are completely new to nodejs and vue you might try the following steps on your machine.  

1. install [NodeJS](https://nodejs.org/en/)
2. install vue via the following command ```npm install -g @vue/cli```
3. vue create client 
4. cd client
5.  
6. visit http://localhost:8080/

Tipps: 
I use [VS Code Insiders](https://code.visualstudio.com/insiders/) as my IDE.  

## Backend
Our server which connects us to the Ethereum Blockchain can be reached via the following example request:
http://openforce.de/getBalance/walletAddress/0x1eB9426F329d46f5Ee2263C030d6E9661f2ca694  

The code for this can be found [here](https://github.com/michael-spengler/klopapier.exchange/blob/main/web3-proxy-nodejs-infura/web3-server.ts).   

We'll use Smart Contracts deployed on the Ethereum Blockchain + NodeJS or Deno & Web3 (we need to check [this open issue](https://github.com/ethereum/web3.js/issues/3700)).  

We forward request from unsafe port 80 to safe 443 using the following forwarder https://deno.land/x/http_to_https.

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

**Option 3: Using Vercel**
To be explored - compare how nest.land did it

**Option 4: Using argoapp.live**
To be explored https://argoapp.live (alpha release)


## Feedback & Contact
In case of any feedback, please raise an issue [here](https://github.com/michael-spengler/klopapier.exchange/issues/new).

