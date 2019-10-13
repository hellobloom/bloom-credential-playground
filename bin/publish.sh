#!/bin/bash
source './bin/strict-mode.sh'
docker build -t hellobloom/bloom-credential-playground .
docker push hellobloom/bloom-credential-playground