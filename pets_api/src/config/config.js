/**
 * Configuration management module for the application.
 *
 * @module config/config
 */

/**
 * Application configuration object.
 * Centralizes access to environment variables and other configuration.
 */
const config = {
  /**
   * DynamoDB table name for storing pet information.
   */
  DYNAMODB_TABLE_NAME: process.env.DYNAMODB_TABLE_NAME || 'pets',

  /**
   * AWS Region for services.
   */
  AWS_REGION: process.env.AWS_REGION || 'ap-northeast-1',

  /**
   * Flag to determine if we're in a local development environment.
   */
  IS_LOCAL: process.env.AWS_SAM_LOCAL === 'true',

  /**
   * AWS SDK configuration for local development.
   * These settings will be used when running with SAM local.
   */
  getDynamoDBConfig() {
    // If running locally with SAM, use these configs to connect to local DynamoDB
    if (this.IS_LOCAL) {
      return {
        region: this.AWS_REGION,
        endpoint: 'http://localhost:8000' // Default endpoint for local DynamoDB
      };
    }

    // In production, just use the region
    return {
      region: this.AWS_REGION
    };
  }
};

module.exports = config;
