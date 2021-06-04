FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/node_nodules/.bin:$PATH

#install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install -g npm@7.16.0

#add app
COPY . ./

#start app
CMD [ "npm", "start" ]