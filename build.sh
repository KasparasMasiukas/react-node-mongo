#!/bin/bash
cd client
npm run-script build
rm -r ../server/build
mv build ../server
cd ..