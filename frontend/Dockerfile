FROM node:20.12.1

WORKDIR /app
COPY package.json package-lock.json pnpm-lock.yaml ./
RUN npm install

COPY . .
EXPOSE 4200
CMD [ "npm", "start" ]