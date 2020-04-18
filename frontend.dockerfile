FROM node:slim
WORKDIR /root/
COPY . .
RUN npm i && npm run build

FROM nginx:alpine
WORKDIR /var/www/app/
COPY --from=0 /root/dist/front-agendamento/. .
COPY --from=0 /root/nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
