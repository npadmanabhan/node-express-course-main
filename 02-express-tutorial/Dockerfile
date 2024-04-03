# Use official Node.js image as base
FROM node:14.17.0-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies (based on package.json and package-lock.json)
RUN npm install

# Copy application code to the image (this includes app.js and other files)
COPY . .

# Expose port
EXPOSE 5000

# Command to run the application
CMD ["node", "app.js"]
