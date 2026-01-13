# Build backend only
FROM node:20-alpine

WORKDIR /app

# Copy backend files
COPY package*.json ./
RUN npm install --production

COPY . .

# Expose port (adjust if your backend uses a different port)
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]