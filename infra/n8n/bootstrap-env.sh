#!/usr/bin/env bash
# Generate secrets for infra/n8n/.env (run once on your machine or VPS).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
ENV_FILE="$ROOT/infra/n8n/.env"
EXAMPLE="$ROOT/infra/n8n/.env.example"

if [[ -f "$ENV_FILE" ]]; then
  echo "Already exists: $ENV_FILE"
  echo "Delete it first if you want to regenerate."
  exit 1
fi

cp "$EXAMPLE" "$ENV_FILE"

gen() { openssl rand -base64 32 | tr -d '/+=' | head -c 32; }
gen_hex() { openssl rand -hex 32; }

if command -v sed >/dev/null 2>&1; then
  sed -i "s/^POSTGRES_PASSWORD=$/POSTGRES_PASSWORD=$(gen)/" "$ENV_FILE"
  sed -i "s/^POSTGRES_NON_ROOT_PASSWORD=$/POSTGRES_NON_ROOT_PASSWORD=$(gen)/" "$ENV_FILE"
  sed -i "s/^N8N_ENCRYPTION_KEY=$/N8N_ENCRYPTION_KEY=$(gen_hex)/" "$ENV_FILE"
fi

chmod 600 "$ENV_FILE" 2>/dev/null || true

echo "Created $ENV_FILE with generated secrets."
echo "Save N8N_ENCRYPTION_KEY in your password manager before continuing."
grep '^N8N_ENCRYPTION_KEY=' "$ENV_FILE"
