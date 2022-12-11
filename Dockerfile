FROM node:16
COPY . .
RUN npm install
CMD ["npx","ts-node","./src/server.ts"]