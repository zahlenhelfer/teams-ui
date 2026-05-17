# Dockerfile
FROM node:18-alpine AS build

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

# Copy entrypoint script that injects runtime env vars
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

CMD ["/entrypoint.sh"]
