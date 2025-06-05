/**
 * Logger utility for consistent logging across the application.
 *
 * @module utils/logger
 */

/**
 * Log an informational message with optional metadata.
 *
 * @param {string} message - The message to log
 * @param {Object} [metadata] - Optional metadata to include with the log
 */
exports.info = (message, metadata) => {
  console.log(JSON.stringify({
    level: 'INFO',
    message,
    timestamp: new Date().toISOString(),
    ...(metadata && { metadata })
  }));
};

/**
 * Log an error message with optional metadata.
 *
 * @param {string} message - The error message to log
 * @param {Object} [metadata] - Optional metadata to include with the log
 */
exports.error = (message, metadata) => {
  console.error(JSON.stringify({
    level: 'ERROR',
    message,
    timestamp: new Date().toISOString(),
    ...(metadata && { metadata })
  }));
};

/**
 * Log a warning message with optional metadata.
 *
 * @param {string} message - The warning message to log
 * @param {Object} [metadata] - Optional metadata to include with the log
 */
exports.warn = (message, metadata) => {
  console.warn(JSON.stringify({
    level: 'WARN',
    message,
    timestamp: new Date().toISOString(),
    ...(metadata && { metadata })
  }));
};
