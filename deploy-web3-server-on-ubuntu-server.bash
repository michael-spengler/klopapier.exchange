cd /root/klopapier.exchange

git pull 

npm config set ignore-scripts true
cd /root/klopapier.exchange/web3-proxy-nodejs-infura && npm i
npm config set ignore-scripts false

tsc
# if you start it the first time try things out via
# ts-node web3-server.ts or for the long run
pm2 start dist/web3-server.ts
# pm2 start 
pm2 restart 1 