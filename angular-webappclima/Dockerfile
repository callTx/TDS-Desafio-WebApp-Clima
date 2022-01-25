FROM node:latest as webappclima
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=webappclima app/dist/angular-webappclima /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t angular-wepappclima

# docker run -p 8081:80 angular-wepappclima