FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json tsconfig*.json ./

# Install dependencies
RUN npm install

# Copy app
COPY . .

# Build TypeScript code
RUN npm run build

# Stage 2: Production stage
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Copy only the necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Expose the port your app runs on
EXPOSE 4000

# Start the app
CMD ["node", "dist/server.js"]