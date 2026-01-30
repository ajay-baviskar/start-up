FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

# For Create React App
CMD ["npm", "start"]

# OR for Vite
# CMD ["npm", "run", "dev"]