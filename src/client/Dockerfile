FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/client/node_nodules/.bin:$PATH

#install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install 

#add app
COPY . ./

#start app
CMD [ "npm", "start" ]