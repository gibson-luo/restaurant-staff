#!/bin/sh

set -e

echo "run db migration"

npm install -g migrate-mongo

migrate-mongo up

echo "run api server"

node src/server