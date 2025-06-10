/**
 * Unit tests for the errorHandler module
 */
const { ValidationError, DatabaseError, handleError } = require('../../../src/utils/errorHandler');

describe('errorHandler.js', () => {
  describe('ValidationError', () => {
    test('should create a validation error with details', () => {
      // Act
      const error = new ValidationError('Validation failed', [
        { field: 'petName', message: 'Required' }
      ]);

      // Assert
      expect(error instanceof Error).toBe(true);
      expect(error.name).toBe('ValidationError');
      expect(error.message).toBe('Validation failed');
      expect(error.details).toEqual([
        { field: 'petName', message: 'Required' }
      ]);
    });

    test('should handle empty details', () => {
      // Act
      const error = new ValidationError('Validation failed');

      // Assert
      expect(error.details).toEqual([]);
    });
  });

  describe('DatabaseError', () => {
    test('should create a database error with original error', () => {
      // Arrange
      const originalError = new Error('Connection failed');

      // Act
      const error = new DatabaseError('Database operation failed', originalError);

      // Assert
      expect(error instanceof Error).toBe(true);
      expect(error.name).toBe('DatabaseError');
      expect(error.message).toBe('Database operation failed');
      expect(error.originalError).toBe(originalError);
    });
  });

  describe('handleError', () => {
    // Mock console.error to prevent test output pollution
    const originalConsoleError = console.error;
    beforeEach(() => {
      console.error = jest.fn();
    });

    afterEach(() => {
      console.error = originalConsoleError;
    });

    test('should handle ValidationError with 400 status code', () => {
      // Arrange
      const error = new ValidationError('Invalid input', [
        { field: 'petName', message: 'Required' }
      ]);

      // Act
      const response = handleError(error);

      // Assert
      expect(response.statusCode).toBe(400);
      expect(response.headers['Content-Type']).toBe('application/json');

      const body = JSON.parse(response.body);
      expect(body.error).toBe('Invalid input');
      expect(body.details).toEqual([
        { field: 'petName', message: 'Required' }
      ]);
    });

    test('should handle DatabaseError with 500 status code', () => {
      // Arrange
      const originalError = new Error('Connection timeout');
      const error = new DatabaseError('Database operation failed', originalError);

      // Act
      const response = handleError(error);

      // Assert
      expect(response.statusCode).toBe(500);
      expect(response.headers['Content-Type']).toBe('application/json');

      const body = JSON.parse(response.body);
      expect(body.error).toBe('A database error occurred. Please try again later.');
      expect(body).not.toHaveProperty('details'); // Should not expose internal details

      // Should log the original error
      expect(console.error).toHaveBeenCalledWith(
        'Error occurred:',
        expect.any(Object)
      );
      expect(console.error).toHaveBeenCalledWith(
        'Original database error:',
        originalError
      );
    });

    test('should handle generic errors with 500 status code', () => {
      // Arrange
      const error = new Error('Unexpected error');

      // Act
      const response = handleError(error);

      // Assert
      expect(response.statusCode).toBe(500);
      expect(response.headers['Content-Type']).toBe('application/json');

      const body = JSON.parse(response.body);
      expect(body.error).toBe('An internal server error occurred.');

      // Should log the error
      expect(console.error).toHaveBeenCalledWith(
        'Error occurred:',
        error
      );
    });
  });
});
