FROM node:12-alpine

RUN npm install -g nodemon

RUN mkdir -p /usr/src/app

COPY package.json /usr/src/app/

WORKDIR /usr/src/app

RUN npm install

ENV PORT 1337
ENV MONGODB_CONNECTION_STRING mongodb://database:27017/db

EXPOSE 1337

CMD [ "node", "index.js" ]
