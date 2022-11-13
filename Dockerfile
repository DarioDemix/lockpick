FROM node:lts-alpine3.16 as web-builder

WORKDIR lockpick-web

COPY lockpick-web/ .

RUN npm i && npm run build

FROM maven:3.8.6-eclipse-temurin-8-alpine

WORKDIR lockpick-rest

COPY lockpick-rest/ .

COPY --from=web-builder /lockpick-web/dist src/main/resources/static

RUN mvn clean package

CMD ["mvn", "spring-boot:run"]