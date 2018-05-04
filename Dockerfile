FROM node:carbon
WORKDIR /home/hugo/dockertmp
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build
RUN npm run test
