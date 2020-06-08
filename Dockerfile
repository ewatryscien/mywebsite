FROM alpine as builder

WORKDIR /mywebsite

RUN apk update && apk add libsass sassc

RUN sassc --version

COPY . .
RUN sassc -t compressed style.scss > public/css/style.css

FROM nginx:1.17-alpine

RUN apk update
WORKDIR /usr/share/nginx/html

COPY --from=builder /mywebsite/public/ /usr/share/nginx/html/