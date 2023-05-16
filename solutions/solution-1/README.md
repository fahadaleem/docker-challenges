## Build image

```bash
docker build -t express-webserver:v1 .
```

## Start your container

```bash
docker run -d -p 5000:5000 express-webserver:v1
```

#### Visit localhost:5000 to access the webserver
