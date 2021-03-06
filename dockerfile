FROM node:12-alpine3.13

WORKDIR /home/app

COPY package.json .

RUN yarn install 

COPY . .

CMD ["yarn" , "start"]