FROM node:latest

LABEL Maintainer="JamariusTaylor"

RUN mkdir /site

COPY package.json /site

COPY assets /site/assets

COPY blogs /site/blogs

COPY index.js /site

COPY main.html /site

COPY links /site/links

WORKDIR /site

EXPOSE 8080/tcp

RUN npm install 

CMD [ "node", "index.js" ]


