# Lockpick

A fake e-commerce app. Made as a study project during 2019

## How to run the app

The easiest way to run the app is by using Docker Compose

```sh
docker-compose up
```

This will build the Docker image and it will create two containers: MySQL database and the application.<br>

By default, you can access the app at _**http://localhost:8080**_

You can modify various environment variables, like the server port, from _**.env**_

There are some already registered users:

- admin/1234567
- user/1234567
