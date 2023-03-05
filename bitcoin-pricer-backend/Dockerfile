FROM node:latest

WORKDIR /user/src/app

COPY package.json ./

RUN npm install  --production

COPY . .

EXPOSE 8070

CMD ["node", "server.ts"]