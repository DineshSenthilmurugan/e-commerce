#!/bin/bash

export PATH=$(pwd)/node:$PATH

which node
which npm

# Install dependecies
npm i

# Run app 
npm run start