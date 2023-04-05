#!/bin/bash

# WEBSITE
NPM_PROJECT_PATH=website
cd $NPM_PROJECT_PATH
npm start

# CONSULTAS
DOCKER_CONSULTAS=consultas
cd ../$DOCKER_CONSULTAS
DOCKER_CONSULTAS_PATH=$(pwd)/docker-compose.yml
docker-compose -f $DOCKER_CONSULTAS_PATH up -d

# TRANSFERS
DOCKER_TRANSFERS=dotNetTransfers
cd ../$DOCKER_TRANSFERS
DOCKER_TRANSFERS_PATH=$(pwd)/docker-compose.yml
docker-compose -f $DOCKER_TRANSFERS_PATH up -d

# LOGIN
DOCKER_LOGIN=dotNetLogin
cd ../$DOCKER_LOGIN
DOCKER_LOGIN_PATH=$(pwd)/docker-compose.yml
docker-compose -f $DOCKER_LOGIN_PATH up -d