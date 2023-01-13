FROM node:16.13.2-alpine AS BASE
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16.13.2-alpine AS BUILDER
WORKDIR /usr/src/app
COPY . .
COPY --from=BASE /usr/src/app/node_modules ./node_modules
ENV NODE_ENV=production
RUN yarn build

FROM node:16.13.2-alpine
WORKDIR /next-app
ENV NODE_ENV=production
COPY --from=BUILDER /usr/src/app/.next/standalone ./
COPY --from=BUILDER /usr/src/app/.next/static ./.next/static
COPY --from=BUILDER /usr/src/app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]