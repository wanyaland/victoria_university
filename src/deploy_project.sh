#!/bin/sh

ssh -o StrictHostKeyChecking=no -v $CIRCLECI_USER@$VU_IP << 'ENDSSH'
  cd /home/circleci/app
  eval "$(ssh-agent -s)"
  echo "Getting GH updates" && git pull origin main
  export $(cat .env | xargs)
  docker pull $IMAGE:web
  docker pull $IMAGE:api
  docker-compose -f docker-compose.prod.yml up -d
ENDSSH