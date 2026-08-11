#!/usr/bin/env sh
set -eu

cd "$(dirname "$0")/.."

docker compose build web
docker compose up -d --no-deps web
docker compose ps
