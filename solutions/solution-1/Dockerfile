# Use the Node base image
FROM node

# Set the working directory inside the container
WORKDIR /app

# Copy the application files from the host to the container
COPY . .

# Install the dependencies using npm
RUN npm install

# Expose port 5000 for the application
EXPOSE 5000

# Specify the command to run when the container starts
CMD node index.js
