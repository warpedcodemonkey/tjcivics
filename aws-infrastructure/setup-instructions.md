# AWS Infrastructure Setup Instructions

## Prerequisites

- AWS Account with appropriate permissions
- AWS CLI installed and configured
- Node.js 18+ installed

## DynamoDB Setup

### 1. Create Calendar Events Table

Use the AWS CLI to create the DynamoDB table:

```bash
aws dynamodb create-table \
  --cli-input-json file://dynamodb-schema.json \
  --region us-east-1
```

Or use the AWS Console:
1. Navigate to DynamoDB in AWS Console
2. Click "Create table"
3. Use the schema provided in `dynamodb-schema.json`

### 2. Table Configuration

**Primary Key:**
- Partition Key: `eventId` (String)

**Global Secondary Indexes:**
1. **DateIndex**
   - Partition Key: `date` (String)
   - Projection: ALL

2. **StatusIndex**
   - Partition Key: `status` (String)
   - Sort Key: `date` (String)
   - Projection: ALL

**Attributes:**
- `eventId`: Unique identifier for each booking
- `date`: Event date (ISO format: YYYY-MM-DD)
- `startTime`: Event start time (HH:MM format)
- `endTime`: Event end time (HH:MM format)
- `eventType`: Type of event (wedding, birthday, etc.)
- `customerName`: Name of person booking
- `customerEmail`: Contact email
- `customerPhone`: Contact phone number
- `guestCount`: Expected number of guests
- `status`: Booking status (pending, confirmed, cancelled)
- `createdAt`: Timestamp when booking was created
- `updatedAt`: Timestamp when booking was last updated

### 3. IAM Permissions

Create an IAM user with the following policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:PutItem",
        "dynamodb:GetItem",
        "dynamodb:UpdateItem",
        "dynamodb:Query",
        "dynamodb:Scan"
      ],
      "Resource": [
        "arn:aws:dynamodb:us-east-1:ACCOUNT_ID:table/tj-civic-calendar",
        "arn:aws:dynamodb:us-east-1:ACCOUNT_ID:table/tj-civic-calendar/index/*"
      ]
    }
  ]
}
```

## S3 Static Website Hosting

### 1. Create S3 Bucket

```bash
aws s3 mb s3://tj-civic-center-website --region us-east-1
```

### 2. Configure Bucket for Static Website Hosting

```bash
aws s3 website s3://tj-civic-center-website \
  --index-document index.html \
  --error-document index.html
```

### 3. Set Bucket Policy

Create a file `bucket-policy.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::tj-civic-center-website/*"
    }
  ]
}
```

Apply the policy:

```bash
aws s3api put-bucket-policy \
  --bucket tj-civic-center-website \
  --policy file://bucket-policy.json
```

### 4. Deploy Website

Build and deploy:

```bash
npm run build
aws s3 sync dist/ s3://tj-civic-center-website --delete
```

### 5. CloudFront Distribution (Optional but Recommended)

Create a CloudFront distribution for HTTPS and CDN:

1. Go to CloudFront in AWS Console
2. Create distribution
3. Origin: Your S3 website endpoint
4. Default root object: index.html
5. Enable HTTPS
6. Create custom error response for SPA routing:
   - HTTP Error Code: 403
   - Response Page Path: /index.html
   - HTTP Response Code: 200

## Environment Variables

Update `.env` file with your AWS credentials:

```env
# AWS Configuration
VITE_AWS_REGION=us-east-1
VITE_AWS_ACCESS_KEY_ID=your_access_key_id
VITE_AWS_SECRET_ACCESS_KEY=your_secret_access_key
VITE_DYNAMODB_TABLE_NAME=tj-civic-calendar

# Square Payment Configuration
VITE_SQUARE_APPLICATION_ID=your_square_app_id
VITE_SQUARE_LOCATION_ID=your_square_location_id
VITE_SQUARE_ACCESS_TOKEN=your_square_access_token

# API Endpoints
VITE_API_BASE_URL=https://api.yoursite.com
```

## Security Best Practices

1. **Never commit credentials to Git**
   - Add `.env` to `.gitignore`
   - Use environment variables or AWS Secrets Manager

2. **Use IAM roles for production**
   - For production, use IAM roles instead of access keys
   - Enable MFA for IAM users

3. **Enable encryption**
   - Enable encryption at rest for DynamoDB
   - Use HTTPS/TLS for all API calls

4. **Monitor access**
   - Enable CloudTrail for auditing
   - Set up CloudWatch alarms for unusual activity

## Testing

Test DynamoDB connection:

```bash
npm run dev
```

Navigate to the calendar page and verify:
- Events are loading
- Date selection works
- Booking flow functions correctly

## Troubleshooting

### DynamoDB Connection Issues

1. Verify credentials are correct
2. Check IAM permissions
3. Ensure table exists in correct region
4. Check AWS credentials are properly configured

### S3 Deployment Issues

1. Verify bucket exists and is in correct region
2. Check bucket policy allows public read access
3. Ensure website hosting is enabled
4. Verify CloudFront distribution is configured correctly

## Additional Resources

- [AWS DynamoDB Documentation](https://docs.aws.amazon.com/dynamodb/)
- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [Square Payments Documentation](https://developer.squareup.com/docs/web-payments/overview)
