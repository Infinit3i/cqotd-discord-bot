FROM node:lts-alpine

# Set environment variables for Puppeteer
ENV NODE_ENV=production
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=false
ENV PUPPETEER_EXECUTABLE_PATH="/usr/bin/chromium-browser"

# Set working directory
WORKDIR /usr/src/app

# Copy and install dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

# Install required dependencies for Puppeteer and Chromium
RUN apk add --no-cache \
  chromium \
  nss \
  freetype \
  harfbuzz \
  ca-certificates \
  ttf-freefont \
  bash

# Copy application files
COPY . .

# Expose application entry point
CMD ["node", "src/index.js"]
