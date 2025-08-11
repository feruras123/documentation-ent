# pull official base image
FROM node:19-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN apk add --no-cache python3 py3-pip make g++

# install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# add app
COPY . ./

ENV NODE_ENV=development
# start app
CMD ["npm", "run", "start"]
