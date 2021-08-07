# Docker Workshop 101

## Topics

- Set up a sample Node Express app listening to port 3000
- Dockerize that Node app:
  - what are base images and Docker Hub
  - exposing ports 
  - mounting volumes
  - how to build your own Docker images: `docker build -t your-image-name:latest .`
  - how to start containers using images: `docker run --name your-container-name -p 3000:3000 your-image-name:latest`
  - how to start the same container, now mounting a volume: `docker run --name your-container-name -p 3000:3000 -v ./greeting-custom.txt:/src/app/greeting.txt your-image-name:latest`
    - highlight how you can mount any file, from anywhere you're starting the container
- Start a Postgres container
  - `docker run --name postgres -p 5432:5432 -e POSTGRES_USER=test -e POSTGRES_PASSWORD=secret -e POSTGRES_DB=foobar postgres:13.3`
  - show how you can connect to the Postgres container just like any other installed-on-host Postgres or some other remote Postgres
- Connect Node app with Postgres
  - show how running the Node app on host and making it connect to the Postgres container
