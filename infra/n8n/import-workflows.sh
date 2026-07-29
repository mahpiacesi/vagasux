#!/usr/bin/env bash
# Import workflow JSON files from workflows/n8n-export/ into a running n8n instance.
# Requires: docker compose running in infra/n8n, export files on disk.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
EXPORT_DIR="$ROOT/workflows/n8n-export"
COMPOSE_DIR="$ROOT/infra/n8n"

if [[ ! -d "$EXPORT_DIR" ]]; then
  echo "Missing $EXPORT_DIR"
  exit 1
fi

shopt -s nullglob
files=("$EXPORT_DIR"/*.json)
if [[ ${#files[@]} -eq 0 ]]; then
  echo "No JSON files in $EXPORT_DIR"
  echo "Copy your Cloud export there first."
  exit 1
fi

cd "$COMPOSE_DIR"

for file in "${files[@]}"; do
  name="$(basename "$file")"
  echo "Importing $name ..."
  docker compose cp "$file" n8n:/tmp/import.json
  docker compose exec -u node n8n n8n import:workflow --input=/tmp/import.json
done

echo "Done. Open n8n UI → re-link credentials → publish workflows."
