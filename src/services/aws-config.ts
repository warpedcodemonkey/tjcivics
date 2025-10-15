import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

// AWS Configuration
const REGION = import.meta.env.VITE_AWS_REGION || 'us-east-1';

// Create DynamoDB client
const client = new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
  },
});

// Create DynamoDB Document client for easier operations
export const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});

// Table names
export const TABLES = {
  CALENDAR_EVENTS: import.meta.env.VITE_DYNAMODB_TABLE_NAME || 'tj-civic-calendar',
  BOOKINGS: 'tj-civic-bookings',
  MEMBERS: 'tj-civic-members',
};

export default docClient;
