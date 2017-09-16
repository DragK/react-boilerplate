FROM node:6.3.1

RUN useradd --user-group --create-home --shell /bin/false appuser

ENV HOME=/home/appuser

COPY package.json npm-shrinkwrap.json $HOME/workdir/
RUN chown -R appuser:appuser $HOME/*

USER appuser

WORKDIR $HOME/workdir

RUN npm install

EXPOSE 8080
CMD ["npm", "start"]