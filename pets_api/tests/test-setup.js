/**
 * Jest test setup configuration
 */

// Set up environment variables for testing
process.env.IS_LOCAL = 'true';
process.env.DYNAMODB_TABLE_NAME = 'test-pets-table';
process.env.AWS_REGION = 'us-east-1';
