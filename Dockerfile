FROM node:16
WORKDIR /app
COPY pacakge.json /app
RUN npm install
COPY .  /app
CMD node server.js
EXPOSE 8000