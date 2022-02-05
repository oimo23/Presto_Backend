FROM node:16.13.2-alpine AS builder

WORKDIR /app
COPY yarn.lock yarn.lock
COPY package.json package.json
COPY prisma ./prisma/
RUN yarn install --non-interactive --frozen-lockfile

COPY . .
RUN yarn build
RUN npm prune --production

FROM node:16.13.2-alpine
ENV NODE_ENV=production
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

RUN adduser -D prestouser && chown -R prestouser dist/src/main.js
USER prestouser

EXPOSE 8080
CMD ["node", "dist/src/main.js"]