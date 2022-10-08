#!/bin/bash

export PATH=$(pwd)/node:$PATH

which node
which npm

# Run Lint
npm run Lint

#Run Build
npm run build