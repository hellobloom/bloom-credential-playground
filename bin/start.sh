#!/bin/bash
source './bin/strict-mode.sh'
node build/migrations.js
node build/index.js "$@"