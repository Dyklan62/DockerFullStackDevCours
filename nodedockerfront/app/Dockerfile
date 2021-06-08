FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8081
CMD [ "http-server", "dist" ]

#docker network create DockerProjectbridge
#cd .\nodedocker\
#docker build -t "nodeserver" .        
#docker run -dit --name nodedockerfront/vue-app -p 8080:8080 --network DockerProjectbridge vuejs-app