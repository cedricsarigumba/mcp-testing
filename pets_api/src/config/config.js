/**
 * Application configuration
 */

const config = {
  /**
   * Get the DynamoDB table name from environment variables
   *
   * @returns {string} The DynamoDB table name
   */
  getDynamoDBTableName: () => process.env.DYNAMODB_TABLE_NAME || 'pets',

  /**
   * Get the AWS region
   *
   * @returns {string} The AWS region
   */
  getAwsRegion: () => process.env.AWS_REGION || 'ap-northeast-1',
};

module.exports = config;
