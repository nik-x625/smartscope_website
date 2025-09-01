FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Create necessary directories
RUN mkdir -p /opt/chatbot_website

# Expose port 6000 as requested
EXPOSE 6000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=6000

# Start the application
CMD ["npm", "start"]
