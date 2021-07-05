#!/bin/sh

ssh -o StrictHostKeyChecking=no -v $CIRCLECI_USER@$VU_IP << 'ENDSSH'
  cd /home/circleci/victoria_university
  eval "$(ssh-agent -s)"
  echo "Getting GH updates" && git pull origin main
  export $(cat src/app/.env | xargs)
  docker-compose -f src/docker-compose.prod.yaml up -d --build
ENDSSH