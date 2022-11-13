#!/bin/bash

set -a # automatically export all variables
source .env
set +a

SERVER_URL="http://localhost:${SERVER_PORT}"

function cleanup {
  printf "\n...removing containers\n"
  docker-compose down
}

trap cleanup EXIT

printf "\n...building Docker image\n"
docker build -t lockpick:${LOCKPICK_VERSION} .

# start DB - this requires Docker and Docker Compose installed on your machine
printf "\n...starting containers\n"
docker-compose up -d

until [ "$(curl -s -w "%{http_code}\n" "$SERVER_URL/index.html" -o /dev/null)" -eq 200 ]; do
  printf "\n...waiting for server to be ready\n"
  sleep 1
done

printf "\n### DONE ###\n"
printf "\nYou can reach the app at $SERVER_URL\n"
printf "\nCtrl + C to shutdown\n"

while true; do
  sleep 10
done

