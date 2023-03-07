FROM node:16.16.0 AS base

COPY [".", "/usr/local/app"]

WORKDIR /usr/local/app

RUN yarn install

EXPOSE 4000

CMD ["yarn", "start"] 