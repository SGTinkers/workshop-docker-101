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
  - show running the Node app on host and making it connect to the Postgres container
- Intro Docker Compose by composing the Node app and the Postgres container
  - highlight how the Node app cannot resolve `localhost` to our DB in the `docker-compose.yml`
  - highlight the special DNS name `host.docker.internal` which resolves to the host's IP address, but this only works cos we're exposing the DB container's port at the host
  - highlight how service names in `docker-compose.yml` becomes resolvable DNS names, when in containers participating in that `docker-compose.yml`
- Add a web server service (Nginx) to the `docker-compose.yml`, in preparation for serving a React app
  - show how to create a simple Dockerfile that copies over the static files from the built React app to the folder in the Nginx container that Nginx will serve content out of