FROM node:alpine
WORKDIR /app
RUN npm install -g @angular/cli@8.3.20
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD ["npm", "start"]