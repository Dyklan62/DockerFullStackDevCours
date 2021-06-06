FROM mysql

ENV MYSQL_DATABASE DockerDatabaseProjectTest

COPY ./Dbscripts/ /docker-entrypoint-initdb.d/

#docker build -t "mysqlserver" .
#docker run -d -p 3306:3306 --name mysqlcontainer -e MYSQL_ROOT_PASSWORD=test mysqlserver 
#docker exec -it mysqlcontainer bash       