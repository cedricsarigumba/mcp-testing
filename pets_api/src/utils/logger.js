/**
 * Logger utility for the application
 */

/**
 * Log information message
 *
 * @param {string} message - Message to log
 * @param {Object} data - Optional data to include in log
 */
const info = (message, data = {}) => {
  console.log(`INFO: ${message}`, data);
};

/**
 * Log error message
 *
 * @param {string} message - Error message to log
 * @param {Error|Object} error - Error object or data
 */
const error = (message, error = {}) => {
  console.error(`ERROR: ${message}`, error);
};

module.exports = {
  info,
  error,
};
