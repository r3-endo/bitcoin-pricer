FROM node:latest

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install  --production

COPY . .

RUN npm run build

EXPOSE 8070

CMD [ "npm", "run", "start" ]