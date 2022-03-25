#!/bin/sh

ssh -o StrictHostKeyChecking=no -v $CIRCLECI_USER@$VU_IP << 'ENDSSH'
  cd /home/circleci/app
  export $(cat .env | xargs)
  docker login -u $DOCKER_USER -p $DOCKER_PASS
  docker system prune -f
  docker pull wanyaland/vu_web:latest
  docker pull wanyaland/vu_api:latest
  docker pull wanyaland/vu_nginx:latest
  docker-compose -f docker-compose.prod.yaml up -d
  docker system prune -f
ENDSSH
