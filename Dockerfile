FROM node:16
ENV NODE_ENV development
WORKDIR /usr/src/frontend

COPY package.json .
COPY yarn.lock .
RUN yarn 
COPY . . 

RUN yarn build


EXPOSE 3000
CMD ["yarn", "start"]