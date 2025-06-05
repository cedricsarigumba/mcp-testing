/**
 * Error handler module for managing custom errors and responses.
 */

/**
 * Custom validation error class.
 */
class ValidationError extends Error {
  /**
   * Creates a new validation error.
   *
   * @param {string} message - Error message
   * @param {Array} details - Validation error details
   */
  constructor(message, details = []) {
    super(message);
    this.name = 'ValidationError';
    this.details = details;
  }
}

/**
 * Custom database operation error class.
 */
class DatabaseError extends Error {
  /**
   * Creates a new database error.
   *
   * @param {string} message - Error message
   * @param {Error} originalError - The original error that was thrown
   */
  constructor(message, originalError) {
    super(message);
    this.name = 'DatabaseError';
    this.originalError = originalError;
  }
}

/**
 * Handles different types of errors and produces appropriate HTTP responses.
 *
 * @param {Error} error - The error to handle
 * @returns {Object} HTTP response with appropriate status code and error info
 */
function handleError(error) {
  console.error('Error occurred:', error);
  
  // Prepare base error response
  const errorResponse = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Handle different types of errors
  if (error instanceof ValidationError) {
    errorResponse.statusCode = 400;
    errorResponse.body = JSON.stringify({
      error: error.message,
      details: error.details
    });
  } else if (error instanceof DatabaseError) {
    errorResponse.statusCode = 500;
    errorResponse.body = JSON.stringify({
      error: 'A database error occurred. Please try again later.'
    });
    
    // Log the original error for debugging but don't expose it to the client
    console.error('Original database error:', error.originalError);
  } else {
    // Generic error handler
    errorResponse.statusCode = 500;
    errorResponse.body = JSON.stringify({
      error: 'An internal server error occurred.'
    });
  }

  return errorResponse;
}

module.exports = {
  ValidationError,
  DatabaseError,
  handleError
};
