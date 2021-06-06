FROM node:14
ENV NODE_ENV=development 

WORKDIR /app

COPY ["package.json", "package-lock.json*", "/public" , "/src", "./" ]

RUN npm install

COPY . .

CMD [ "npm", "start" ]

#docker build -t "nodeserver" .        
#docker run -dit --name nodeservercontrainer -p 8080:8080 nodeserver