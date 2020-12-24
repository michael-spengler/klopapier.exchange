cd /root/klopapier.exchange

git pull 

npm config set ignore-scripts true
cd /root/klopapier.exchange/web3-proxy-nodejs-infura && npm i
npm config set ignore-scripts false

pm2 restart 1 # or (if first time or so) ts-node web3-server.ts 