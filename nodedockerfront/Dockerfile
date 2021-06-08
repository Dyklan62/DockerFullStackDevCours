FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /node-front

COPY ["/nodedockerfront/app/package*.json", "/nodedockerfront/app", "./" ]

RUN npm install

COPY . .

EXPOSE 8081

CMD ["npm", "run", "serve"]

#docker network create DockerProjectbridge
#cd .\nodedocker\
#docker build -t "nodeserver" .        
#docker run -dit --name nodedockerfront/vue-app -p 8080:8080 --network DockerProjectbridge vuejs-app