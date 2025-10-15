#!/bin/bash

# Deployment script for AWS S3
# This script builds the React app and deploys it to S3

set -e

echo "🚀 Starting deployment process..."

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    exit 1
fi

# Configuration
BUCKET_NAME="tj-civic-center-website"
REGION="us-east-1"
DISTRIBUTION_ID="" # Add your CloudFront distribution ID here if using CloudFront

# Build the application
echo "📦 Building application..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed. dist directory not found."
    exit 1
fi

echo "✅ Build completed successfully"

# Deploy to S3
echo "☁️  Uploading to S3..."
aws s3 sync dist/ s3://${BUCKET_NAME} \
    --region ${REGION} \
    --delete \
    --cache-control "public, max-age=31536000, immutable" \
    --exclude "index.html" \
    --exclude "*.map"

# Upload index.html with no-cache
aws s3 cp dist/index.html s3://${BUCKET_NAME}/index.html \
    --region ${REGION} \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "text/html"

echo "✅ Files uploaded to S3"

# Invalidate CloudFront cache if distribution ID is provided
if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id ${DISTRIBUTION_ID} \
        --paths "/*"
    echo "✅ CloudFront cache invalidated"
fi

# Get website URL
WEBSITE_URL="http://${BUCKET_NAME}.s3-website-${REGION}.amazonaws.com"

echo ""
echo "✨ Deployment completed successfully! ✨"
echo "📱 Website URL: ${WEBSITE_URL}"
echo ""

exit 0
