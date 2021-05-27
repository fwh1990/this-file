#!/usr/bin/env bash

set -e

npx ts-prepublish


cp -R ./test/ lib/
npx jest --testMatch=**/lib/*.cjs.test.js

cp -R ./test/ es/
node --experimental-vm-modules ./node_modules/.bin/jest  --collectCoverage --coverageReporters=lcov --coverageReporters=text-summary --collectCoverageFrom=./es/index.js --testMatch=**/es/*.esm.test.js
