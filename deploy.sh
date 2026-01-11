#!/bin/bash
# AEGIS AI Cooperative Website - Deployment Script
# Syncs to VPS and deploys with Docker

set -e

# Configuration
VPS_HOST="root@srv1170368.hstgr.cloud"
VPS_PATH="/root/aegis-cooperative-site"

echo "🚀 Deploying AEGIS AI Cooperative Website..."

# Step 1: Sync files to VPS
echo "📦 Syncing files to VPS..."
rsync -avz --delete \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude 'dist' \
    --exclude '.DS_Store' \
    ./ "${VPS_HOST}:${VPS_PATH}/"

# Step 2: Build and deploy on VPS
echo "🐳 Building and deploying Docker container..."
ssh "${VPS_HOST}" << 'EOF'
cd /root/aegis-cooperative-site

# Stop existing container if running
docker compose down 2>/dev/null || true

# Build and start new container
docker compose build --no-cache
docker compose up -d

# Show status
echo ""
echo "✅ Deployment complete!"
docker ps | grep aegis-cooperative
EOF

echo ""
echo "🎉 AEGIS AI Cooperative website deployed!"
echo "   → https://aegisaicooperative.com"
