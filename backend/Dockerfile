FROM node:20.12.1

WORKDIR /app
COPY package.json package-lock.json pnpm-lock.yaml ./
RUN npm install

COPY . .
ENV PORT 4000
EXPOSE 4000
CMD [ "npm", "start" ]