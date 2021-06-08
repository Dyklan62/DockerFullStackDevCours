FROM node:12.18.1

WORKDIR /app-back-nodeJs

COPY ["/nodedocker/app", "./" ]

RUN npm install

COPY . .

EXPOSE 8080

CMD "npm" "start"