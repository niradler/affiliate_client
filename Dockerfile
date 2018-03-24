FROM node:8.6 as node
WORKDIR /app
COPY package.json /app/
RUN npm install
RUN npm install -g http-server
COPY ./ /app/
ARG env=prod
RUN npm run build -- --prod --environment $env

EXPOSE 8080
CMD cd dist && http-server

