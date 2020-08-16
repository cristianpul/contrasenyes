FROM node:14.2.0
# FROM canonicalwebteam/node

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install --no-optional --only=production

COPY . /app

CMD node index.js 

EXPOSE 3000