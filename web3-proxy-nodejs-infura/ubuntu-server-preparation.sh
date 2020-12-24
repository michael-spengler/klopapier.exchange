# basics
sudo apt update
apt install git
sudo apt install nodejs
sudo apt install npm
npm i -g typescript
npm i -g  ts-node

# we use pm2 as process manager
npm i -g pm2

# https certificates via certbot - background info: https://certbot.eff.org/lets-encrypt/ubuntufocal-other
sudo apt install snapd
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
# consider auto renewal "sudo certbot renew" --> https://techmonger.github.io/49/certbot-auto-renew/