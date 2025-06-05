/**
 * Configuration module for managing environment variables and settings.
 */

/**
 * Gets an environment variable with validation.
 *
 * @param {string} name - The name of the environment variable
 * @param {string} defaultValue - Default value to use if environment variable is not set
 * @param {boolean} required - Whether the environment variable is required
 * @returns {string} The value of the environment variable or default value
 * @throws {Error} If the environment variable is required but not set
 */
function getEnvVar(name, defaultValue = '', required = false) {
  const value = process.env[name] || defaultValue;

  if (required && !value) {
    throw new Error(`Required environment variable ${name} is not set`);
  }

  return value;
}

/**
 * Exports configuration values from environment variables.
 */
module.exports = {
  dynamoDb: {
    tableName: getEnvVar('DYNAMODB_TABLE_NAME', 'pets', true),
    region: getEnvVar('AWS_REGION', 'ap-northeast-1')
  },
  getEnvVar
};
