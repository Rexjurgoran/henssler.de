FROM node

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

RUN npm install --force

EXPOSE 4200

CMD [ "ng", "serve", "--host", "0.0.0.0" ]