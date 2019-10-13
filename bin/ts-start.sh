#!/bin/bash
source './bin/strict-mode.sh'
./node_modules/.bin/ts-node migrations.ts
./node_modules/.bin/ts-node index.ts $*