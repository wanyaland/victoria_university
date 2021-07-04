cd /home/circleci/victoria_university

git pull origin main

docker-compose -f src/docker-compose.prod.yaml up -d --build
