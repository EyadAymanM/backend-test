# Use a Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port your server runs on (e.g., 3000)
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start"]
