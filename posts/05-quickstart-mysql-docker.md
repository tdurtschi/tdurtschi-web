---
title: "Local MySQL in Docker Quickstart Guide"
date: "2021-12-14"
previewLength: 204
---

Creating a local MySQL database for development purposes is simple, but getting the configuration right can be a hassle. This example initializes a MariaDB container and a user with specified password. 

To get started, save the following file in your current directory as `docker-compose.yml`. The docker image will be downloaded (this may take a few minutes) and then the container will run locally.

```yml
# This file contains the configuration needed to run a local MariaDB
# (MySQL compatible) server for development purposes.
#
# To start the MariaDB server, run:
# > docker-compose up
#
# If you need to re-initialize the database (for example, when schema updates
# are available), you must first destroy the container:
# > docker-compose down
#
# Connect to this server using the connection string: 
# 'server=localhost;port=3306;database=local_db;uid=local_user;password=password;'

version: "3.9"
services:
  mysql:
    image: mariadb:10.7
    ports:
      - 3306:3306
    volumes:
      - ./MySQL/init:/docker-entrypoint-initdb.d:ro
    environment:
      - MYSQL_ROOT_PASSWORD=p4ssw0rd
      - MYSQL_DATABASE=local_db
      - MYSQL_USER=local_user
      - MYSQL_PASSWORD=password
```

## Notes:
The first time the container runs, it will also run any `.sql` files in the `./MySQL/init` directory. This can be used to creat an initial schema, add test data, etc.

I recommend adding numerical prefixes and descriptions for easier readability, i.e. `01_create_table.sql`, `02_add_some_data.sql`. Initialization scripts are run in alphabetical order, so this will allow you to partition the schema into multiple files, or create forward migrations.

## More resources:
Learn more about [Docker Compose](https://docs.docker.com/compose/).

Learn more about the [docker-compose.yml](https://docs.docker.com/compose/compose-file/) file.