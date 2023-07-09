FROM node:18 as base

WORKDIR /usr/src/app

COPY ./package*.json .

RUN yarn

FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=base /usr/src/app/node_modules ./node_modules

# Copy the rest of the application
COPY . .

EXPOSE 3333

CMD [ "npm", "start"]