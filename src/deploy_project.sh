#!/bin/sh

ssh -o StrictHostKeyChecking=no -v $CIRCLECI_USER@$VU_IP << 'ENDSSH'
  cd /home/circleci/app
  export $(cat .env | xargs)
  docker login -u $DOCKER_USER -p $DOCKER_PASS
  docker pull $IMAGE:web_latest
  docker pull $IMAGE:api
  docker pull $IMAGE:nginx
  docker-compose -f docker-compose.prod.yaml up -d
ENDSSH