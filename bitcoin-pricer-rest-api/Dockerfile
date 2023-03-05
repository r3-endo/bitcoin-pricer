FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=prodcution

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "start" ]