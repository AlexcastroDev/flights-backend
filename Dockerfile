FROM node:18 as base

WORKDIR /usr/src/app

COPY ./package*.json .

RUN yarn --no-optional

COPY . .

RUN yarn generate

FROM node:18 as development

WORKDIR /usr/src/app

COPY --from=base /usr/src/app/node_modules ./node_modules

EXPOSE 3333

CMD [ "yarn", "start"]

FROM node:18 as testing

WORKDIR /usr/src/app

COPY --from=base /usr/src/app/node_modules ./node_modules

EXPOSE 3333

CMD [ "yarn", "start"]