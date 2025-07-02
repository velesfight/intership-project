FROM node:22-alpine AS builder

WORKDIR /app

ARG VITE_API_URL_BASE
ARG VITE_SUPPORT_EMAIL
ARG VITE_LINK_TELEGRAM

ENV VITE_API_URL_BASE=$VITE_API_URL_BASE
ENV VITE_SUPPORT_EMAIL=$VITE_SUPPORT_EMAIL
ENV VITE_LINK_TELEGRAM=$VITE_LINK_TELEGRAM

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build:staging

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
