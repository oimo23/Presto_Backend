FROM library/mysql:5.7.36

ENV MYSQL_DATABASE todo

COPY custom.cnf /etc/mysql/conf.d/

COPY sql /docker-entrypoint-initdb.d