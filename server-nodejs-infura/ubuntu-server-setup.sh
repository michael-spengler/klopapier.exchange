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
# ensure port 80 is free and run sudo certbot certonly --standalone
# this will store your certificate info to /etc/letsencrypt/live/...
# consider auto renewal "sudo certbot renew" --> https://techmonger.github.io/49/certbot-auto-renew/

# for the future as I want to use deno instead of NodeJS
sudo apt install curl 
sudo apt-get install unzip
curl -fsSL https://deno.land/x/install/install.sh | sh

# Port Forwarding
# we use https://deno.land/x/http_to_https 