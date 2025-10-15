# PowerShell deployment script for AWS S3
# This script builds the React app and deploys it to S3

$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Check if AWS CLI is installed
try {
    aws --version | Out-Null
} catch {
    Write-Host "❌ AWS CLI is not installed. Please install it first." -ForegroundColor Red
    exit 1
}

# Configuration
$BucketName = "tj-civic-center-website"
$Region = "us-east-1"
$DistributionId = "" # Add your CloudFront distribution ID here if using CloudFront

# Build the application
Write-Host "📦 Building application..." -ForegroundColor Cyan
npm run build

# Check if build was successful
if (-not (Test-Path "dist")) {
    Write-Host "❌ Build failed. dist directory not found." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully" -ForegroundColor Green

# Deploy to S3
Write-Host "☁️  Uploading to S3..." -ForegroundColor Cyan

# Sync all files except index.html
aws s3 sync dist/ s3://$BucketName `
    --region $Region `
    --delete `
    --cache-control "public, max-age=31536000, immutable" `
    --exclude "index.html" `
    --exclude "*.map"

# Upload index.html with no-cache
aws s3 cp dist/index.html s3://$BucketName/index.html `
    --region $Region `
    --cache-control "no-cache, no-store, must-revalidate" `
    --content-type "text/html"

Write-Host "✅ Files uploaded to S3" -ForegroundColor Green

# Invalidate CloudFront cache if distribution ID is provided
if ($DistributionId) {
    Write-Host "🔄 Invalidating CloudFront cache..." -ForegroundColor Cyan
    aws cloudfront create-invalidation `
        --distribution-id $DistributionId `
        --paths "/*"
    Write-Host "✅ CloudFront cache invalidated" -ForegroundColor Green
}

# Get website URL
$WebsiteUrl = "http://$BucketName.s3-website-$Region.amazonaws.com"

Write-Host ""
Write-Host "✨ Deployment completed successfully! ✨" -ForegroundColor Green
Write-Host "📱 Website URL: $WebsiteUrl" -ForegroundColor Cyan
Write-Host ""

exit 0
