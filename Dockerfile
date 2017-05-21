FROM node:6.10
MAINTAINER Kalyan Chatterjee <kalyan.Chatterjee@delta.com>

ENV HOME=/home/app
ENV NPM_CONFIG_LOGLEVEL warn
# Create app directory
RUN mkdir -p /home/app
RUN npm install -g @angular/cli
WORKDIR $HOME
COPY . $HOME
RUN rm -rf node_modules && rm -rf dist && npm cache clean && npm install && npm rebuild node-sass
EXPOSE 8000
CMD ["npm","start"]
