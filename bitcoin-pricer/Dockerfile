FROM node:latest

RUN npm install -g http-server
WORKDIR /app

# package.jsonが変わった時のみnpm installを実行する
COPY package.json package-lock.json ./
RUN npm install

COPY . .
# 前回のビルド結果を残さないようにする。ビルド済みのdistのみコピーする
RUN npm run build && rm -rf node_modules
RUN npm install --production

EXPOSE 8080
CMD ["http-server", "dist"]