FROM node:16 as dependencies
WORKDIR /solananftbot
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16 as builder
WORKDIR /solananftbot
COPY . .
COPY --from=dependencies /solananftbot/node_modules ./node_modules
RUN yarn build

FROM node:16 as runner
WORKDIR /solananftbot
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /solananftbot/next.config.js ./
COPY --from=builder /solananftbot/dist ./dist
COPY --from=builder /solananftbot/node_modules ./node_modules
COPY --from=builder /solananftbot/package.json ./package.json

EXPOSE 4000
CMD ["yarn", "start"]
