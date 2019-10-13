FROM node:10

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json index.ts migrations.ts ./
COPY typings typings
COPY src src

COPY bin bin
RUN chmod +x bin/*
RUN bin/build.sh

ENTRYPOINT [ "bin/start.sh" ]
CMD ["interactive"]
