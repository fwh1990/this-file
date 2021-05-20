#!/usr/bin/env bash

rm -rf *.mjs *.js *.d.ts

yarn tsc
mv index.js index.mjs
yarn tsc -p tsconfig.cjs.json
