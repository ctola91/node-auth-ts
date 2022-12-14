
# Installs Node.js image
FROM node:18

# sets the working directory for any RUN, CMD, COPY command
RUN mkdir -p /home/app
RUN npm i -g nodemon typescript

# Copies package.json, package-lock.json, tsconfig.json, .env to the root of WORKDIR
# COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

# Copies everything in the src directory to WORKDIR/src
COPY . /home/app

# all files we put in the Docker container running the server will be in /usr/src/app (e.g. /usr/src/app/package.json)
WORKDIR /home/app

# WORKDIR /home/app
# Installs all packages
RUN npm install

# Runs the dev npm script to build & start the server
CMD npm run dev