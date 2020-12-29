# Web3 Server

This part of the project provides the connection to the Ethereum Blockchain. 

## Start the Web3 Server
```sh
ts-node web3-server.ts
```

## Example Requests
**Locally**
http://localhost:3001/getBalance/walletAddress/0x1eB9426F329d46f5Ee2263C030d6E9661f2ca694


**Remote**
... API will be protected via JWT
https://openforce.de/getBalance/walletAddress/0x1eB9426F329d46f5Ee2263C030d6E9661f2ca694



## Challenges & Learnings along the way
Challenge find out the ABI / JSON Interface of a given smart contract id
https://ethereum.stackexchange.com/questions/3149/how-do-you-get-a-json-file-abi-from-a-known-contract-address

--> visit https://remix.ethereum.org/ --> paste the .sol code + compile --> then click the little ABI thing (hard to find - middle left)