#!/bin/sh

ssh -o StrictHostKeyChecking=no -v $CIRCLECI_USER@$VU_IP << 'ENDSSH'
  cd /home/circleci/victoria_university
  export $(cat src/app/.env.dev | xargs)
  docker login -u $DOCKER_USER -p $DOCKER_PASS
  docker pull $IMAGE:web
  docker pull $IMAGE:api
  docker pull $IMAGE:nginx
  docker-compose -f src/docker-compose.prod.yml up -d
ENDSSH