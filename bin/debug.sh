#!/bin/bash

node build/migrations.js
./node_modules/.bin/tsc-watch -p tsconfig.json --onSuccess "node --inspect=0.0.0.0:9299 --nolazy build/index.js $*"