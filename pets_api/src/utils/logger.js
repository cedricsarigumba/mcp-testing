/**
 * Logger utility for consistent logging across the application.
 */

/**
 * Log levels.
 */
const LogLevel = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR'
};

/**
 * Creates a log message with timestamp and metadata.
 *
 * @param {string} level - Log level
 * @param {string} message - Log message
 * @param {Object} meta - Additional metadata
 * @returns {Object} Formatted log object
 */
function createLogEntry(level, message, meta = {}) {
  return {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...meta
  };
}

/**
 * Logs a debug message.
 *
 * @param {string} message - Log message
 * @param {Object} meta - Additional metadata
 */
function debug(message, meta = {}) {
  console.debug(JSON.stringify(createLogEntry(LogLevel.DEBUG, message, meta)));
}

/**
 * Logs an info message.
 *
 * @param {string} message - Log message
 * @param {Object} meta - Additional metadata
 */
function info(message, meta = {}) {
  console.info(JSON.stringify(createLogEntry(LogLevel.INFO, message, meta)));
}

/**
 * Logs a warning message.
 *
 * @param {string} message - Log message
 * @param {Object} meta - Additional metadata
 */
function warn(message, meta = {}) {
  console.warn(JSON.stringify(createLogEntry(LogLevel.WARN, message, meta)));
}

/**
 * Logs an error message.
 *
 * @param {string} message - Log message
 * @param {Error|Object} error - Error object or additional metadata
 */
function error(message, error = {}) {
  const meta = error instanceof Error
    ? { errorName: error.name, errorMessage: error.message, stack: error.stack }
    : error;
  
  console.error(JSON.stringify(createLogEntry(LogLevel.ERROR, message, meta)));
}

module.exports = {
  debug,
  info,
  warn,
  error,
  LogLevel
};
