FROM node:alpine
WORKDIR /client
COPY package.json ./
RUN npm install
COPY ./ ./

EXPOSE 3000

ENTRYPOINT [ "npm" "start" ]