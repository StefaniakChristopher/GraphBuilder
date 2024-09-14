FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# provided through CLI for multi-stage builds, since only one stage it is here
ARG REACT_APP_HOST=graphcrafter.com:3333
ENV REACT_APP_HOST=${REACT_APP_HOST}

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]