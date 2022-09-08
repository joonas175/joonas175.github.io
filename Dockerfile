FROM node:16.17.0

ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

RUN npm install -g vite

RUN npm run build

EXPOSE 3000

CMD [ "node", "server.js" ]