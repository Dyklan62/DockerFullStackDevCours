FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /node-front

COPY ["/nodedockerfront/app/package*.json", "/nodedockerfront/app", "./" ]

RUN npm install

COPY . .

EXPOSE 8081

CMD ["npm", "run", "serve"]
