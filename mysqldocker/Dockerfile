FROM mysql

ENV MYSQL_DATABASE DockerDatabaseProjectTest
ENV MYSQL_ROOT_PASSWORD root  
ENV MYSQL_USER user  
ENV MYSQL_PASSWORD user

COPY ./Dbscripts/ /docker-entrypoint-initdb.d/

#docker build -t "mysqlserver" .
#docker run -d -p 3306:3306 --name mysqlcontainer --network DockerProjectbridge mysqlserver 
#docker exec -it mysqlcontainer bash       
#mysql -hlocalhost -uuser -puser