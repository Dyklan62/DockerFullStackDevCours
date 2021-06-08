FROM node:12.18.1

WORKDIR /app-back-nodeJs

COPY ["/nodedocker/package.json", "/nodedocker/package-lock.json*", "/nodedocker/public" , "/nodedocker/src", "./" ]

RUN npm install

COPY . .

EXPOSE 8080

CMD "npm" "start"

#docker network create DockerProjectbridge
#cd .\nodedocker\
#docker build -t "nodeserver" .        
#docker run -dit --name nodeservercontainer -p 8080:8080 --network DockerProjectbridge nodeserver
#cd ..
#cd .\mysqldocker\
#docker build -t "mysqlserver" .
#docker run -d -p 3306:3306 --name mysqlcontainer --network DockerProjectbridge mysqlserver 