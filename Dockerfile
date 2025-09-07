FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev) for build
RUN npm ci

# Copy source code
COPY . .

# Build the application (vite + esbuild)
RUN npm run build


FROM node:18-alpine AS production

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=4040

# Install only production dependencies and curl for healthcheck
COPY package*.json ./
RUN npm ci --omit=dev && apk add --no-cache curl

# Copy built artifacts from builder stage
COPY --from=builder /app/dist ./dist

# Create necessary directories
RUN mkdir -p /opt/chatbot_website

# Expose port 4040 as requested
EXPOSE 4040

# Start the application
CMD ["npm", "start"]
