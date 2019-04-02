FROM node:latest
RUN mkdir /src
WORKDIR /src
ADD api/package.json /src/package.json
RUN npm install
EXPOSE 3000
CMD npm start