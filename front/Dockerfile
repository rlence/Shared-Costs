FROM node:16.16.0 AS base

COPY [".", "/usr/local/front"]

WORKDIR /usr/local/front

RUN npm install

EXPOSE 5173

CMD ["yarn", "run", "dev"]