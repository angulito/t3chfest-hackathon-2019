FROM node:6-alpine

WORKDIR "/app"

ADD package.json .
RUN npm install;

COPY . .

RUN npm run-script build;

ENV NODE_ENV production
ENV PORT 8080
EXPOSE 8080

CMD [ "npm", "start" ]