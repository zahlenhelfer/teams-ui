# Dockerfile
<<<<<<< HEAD
FROM node:18-alpine AS build
>>>>>>> 8be974a71c0fdff12db3e81ec8f79d4611658bba

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the app for production
RUN npm run build:prod

# Use nginx to serve the app
FROM nginx:alpine

# Copy built app to nginx
COPY --from=build /app/dist/teams-ui /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
