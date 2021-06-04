
# Victoria University Web Application

## Dependencies
- docker-compose

## Development
## Leverage docker-compose to spin up services
```bash
cd src/client
docker-compose -f docker-compose.dev.yaml up -d --build --remove-orphans
```
Ensure docker service is up and running
`docker ps`


On dev setup run `localhost` and verify frontend (react)
## Production

