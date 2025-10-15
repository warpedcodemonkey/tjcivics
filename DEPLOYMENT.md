# Deployment Guide

This guide covers deploying the Thomas Jefferson Civic Center website to AWS S3.

## Prerequisites

1. **AWS Account** with appropriate permissions
2. **AWS CLI** installed and configured
3. **Node.js 18+** and npm installed
4. **Git** (optional, for version control)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Required variables:
- AWS credentials (region, access key, secret key)
- DynamoDB table name
- Square payment credentials
- API base URL

### 3. Build the Application

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### 4. Deploy to AWS S3

#### Option A: Using the Deployment Script (Recommended)

**On Linux/Mac:**
```bash
chmod +x deploy.sh
./deploy.sh
```

**On Windows:**
```powershell
.\deploy.ps1
```

#### Option B: Manual Deployment

```bash
# Create S3 bucket (one-time setup)
aws s3 mb s3://tj-civic-center-website --region us-east-1

# Enable static website hosting (one-time setup)
aws s3 website s3://tj-civic-center-website \
  --index-document index.html \
  --error-document index.html

# Apply bucket policy (one-time setup)
aws s3api put-bucket-policy \
  --bucket tj-civic-center-website \
  --policy file://aws-infrastructure/s3-bucket-policy.json

# Upload files
aws s3 sync dist/ s3://tj-civic-center-website --delete
```

## AWS Infrastructure Setup

### DynamoDB

1. Create the calendar events table:

```bash
cd aws-infrastructure
aws dynamodb create-table --cli-input-json file://dynamodb-schema.json
```

2. Note the table name and update your `.env` file

### S3 Bucket Configuration

Your S3 bucket should be configured for:
- Static website hosting
- Public read access (via bucket policy)
- CORS (if API calls are made from the site)

### CloudFront (Optional but Recommended)

CloudFront provides:
- HTTPS support
- Global CDN for faster loading
- Custom domain support

To set up CloudFront:

1. Create a distribution using AWS Console or CLI
2. Point origin to your S3 website endpoint
3. Configure custom error responses for SPA routing
4. Update `deploy.sh` with your distribution ID

## Environment-Specific Deployments

### Development

```bash
npm run dev
```

Runs the app in development mode at http://localhost:3000

### Staging

Create a separate S3 bucket for staging:

```bash
BUCKET_NAME="tj-civic-center-staging" ./deploy.sh
```

### Production

Use the standard deployment process with production credentials.

## CI/CD Integration

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to AWS S3

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          VITE_AWS_REGION: ${{ secrets.AWS_REGION }}
          VITE_DYNAMODB_TABLE_NAME: ${{ secrets.DYNAMODB_TABLE_NAME }}

      - name: Deploy to S3
        uses: jakejarvis/s3-sync-action@master
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: 'us-east-1'
          SOURCE_DIR: 'dist'
```

## Post-Deployment Checklist

- [ ] Verify website loads at S3 URL
- [ ] Test all navigation links
- [ ] Verify calendar functionality
- [ ] Test booking workflow
- [ ] Check payment integration
- [ ] Test form submissions
- [ ] Verify mobile responsiveness
- [ ] Check all placeholder images display
- [ ] Test on multiple browsers
- [ ] Verify SSL certificate (if using CloudFront)

## Troubleshooting

### Build Errors

```bash
# Clear node_modules and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Fails

1. Check AWS credentials are configured correctly
2. Verify IAM permissions for S3 access
3. Ensure bucket name is correct and available
4. Check AWS CLI version is up to date

### Website Not Loading

1. Verify bucket policy allows public read
2. Check static website hosting is enabled
3. Verify index document is set to `index.html`
4. Check CloudFront distribution status (if using)

### API Errors

1. Verify environment variables are set correctly
2. Check DynamoDB table exists and is accessible
3. Verify IAM permissions for DynamoDB
4. Check CORS configuration

## Monitoring and Maintenance

### AWS CloudWatch

Set up CloudWatch alarms for:
- S3 bucket access patterns
- DynamoDB read/write capacity
- CloudFront error rates (if applicable)

### Backup Strategy

1. Enable versioning on S3 bucket
2. Regular DynamoDB backups (AWS Backup or on-demand)
3. Store deployment artifacts

### Updates

To deploy updates:

```bash
# Pull latest code
git pull origin main

# Install any new dependencies
npm install

# Build and deploy
npm run build
./deploy.sh
```

## Security Considerations

1. **Never commit `.env` file** to version control
2. **Use IAM roles** instead of access keys when possible
3. **Enable MFA** for AWS console access
4. **Regular security audits** of IAM permissions
5. **Monitor CloudTrail** logs for unusual activity
6. **Keep dependencies updated** (`npm audit`)

## Cost Optimization

- Use S3 Intelligent-Tiering for cost savings
- Configure DynamoDB auto-scaling
- Enable CloudFront compression
- Set appropriate cache policies
- Monitor AWS Cost Explorer regularly

## Support

For deployment issues:
1. Check AWS documentation
2. Review CloudWatch logs
3. Contact AWS support for infrastructure issues
4. File issues in project repository for application bugs

## Additional Resources

- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [Vite Build Documentation](https://vitejs.dev/guide/build.html)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
