cd /root/klopapier.exchange

git pull 

npm config set ignore-scripts true
cd /root/klopapier.exchange/server/web3-proxy-nodejs-infura && npm i
npm config set ignore-scripts false

cd /root/klopapier.exchange/server/web3-proxy-nodejs-infura && tsc
# if you start it the first time try things out via
# ts-node src/web3-server.ts or for the long run
# pm2 start /root/klopapier.exchange/web3-proxy-nodejs-infura/dist/web3-server.js
# pm2 start 
pm2 restart 1 