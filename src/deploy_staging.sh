#!/bin/sh

ssh -o StrictHostKeyChecking=no -v $CIRCLECI_USER@$VU_IP << 'ENDSSH'
  cd /home/circleci/app
  export $(cat .env | xargs)
  export $(cat .env.staging.proxy-companion | xargs)
  docker login -u $DOCKER_USER -p $DOCKER_PASS
  docker pull wanyaland/vu_web:latest
  docker pull wanyaland/vu_api:latest
  docker pull wanyaland/vu_nginx_staging:latest
  docker-compose -f docker-compose.staging.yaml up -d
ENDSSH