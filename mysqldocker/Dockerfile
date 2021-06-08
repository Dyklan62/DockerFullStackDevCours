FROM mysql

COPY ./Dbscripts/ /docker-entrypoint-initdb.d/

#docker build -t "mysqlserver" .
#docker run -d -p 3306:3306 --name mysqlcontainer --network DockerProjectbridge mysqlserver 
#docker exec -it mysqlcontainer bash       
#mysql -hlocalhost -uuser -puser