/**
 * Integration test for the main Lambda handler
 */

// Mock dependencies before requiring the handler
jest.mock('../src/utils/validator', () => ({
  validatePetData: jest.fn()
}));
jest.mock('../src/utils/sanitizer', () => ({
  sanitizeInput: jest.fn()
}));
jest.mock('../src/utils/transformer', () => ({
  transformPetData: jest.fn()
}));
jest.mock('../src/services/dynamoDbService', () => ({
  putPetItem: jest.fn()
}));

// Mock logger
jest.mock('../src/utils/logger', () => ({
  info: jest.fn(),
  error: jest.fn()
}));

// Import handler after all mocks are set up
const { handler } = require('../index');

// Get the mock functions for use in the tests
const { validatePetData } = require('../src/utils/validator');
const { sanitizeInput } = require('../src/utils/sanitizer');
const { transformPetData } = require('../src/utils/transformer');
const { putPetItem } = require('../src/services/dynamoDbService');

describe('Lambda Handler', () => {
  // Valid test data
  const validPetData = {
    petName: 'Fluffy',
    type: 'cat',
    color: 'white',
    breed: 'Persian',
    gender: 'female',
    birthday: '2020-01-15'
  };

  // Reset all mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();

    // Default mock implementations
    validatePetData.mockReturnValue(validPetData);
    sanitizeInput.mockReturnValue(validPetData);
    transformPetData.mockReturnValue({
      ...validPetData,
      petId: 'test-id-123',
      createdAt: '2025-06-09T12:00:00.000Z',
      updatedAt: '2025-06-09T12:00:00.000Z'
    });
    putPetItem.mockResolvedValue({ success: true });
  });

  test('should process valid pet data successfully', async () => {
    // Arrange
    const event = {
      body: JSON.stringify(validPetData)
    };

    // Act
    const response = await handler(event, {});

    // Assert
    expect(validatePetData).toHaveBeenCalledWith(validPetData);
    expect(sanitizeInput).toHaveBeenCalledWith(validPetData);
    expect(transformPetData).toHaveBeenCalledWith(validPetData);
    expect(putPetItem).toHaveBeenCalled();

    expect(response.statusCode).toBe(201);
    expect(response.headers['Content-Type']).toBe('application/json');

    const body = JSON.parse(response.body);
    expect(body.petId).toBe('test-id-123');
    expect(body.message).toBe('Pet information saved successfully.');
  });

  test('should handle invalid JSON in request body', async () => {
    // Arrange
    const event = {
      body: '{ invalid-json }'
    };

    // Act
    const response = await handler(event, {});

    // Assert
    expect(validatePetData).not.toHaveBeenCalled();
    expect(sanitizeInput).not.toHaveBeenCalled();
    expect(transformPetData).not.toHaveBeenCalled();
    expect(putPetItem).not.toHaveBeenCalled();

    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.body).error).toBe('Invalid JSON in request body');
  });

  test('should handle validation errors', async () => {
    // Arrange
    const event = {
      body: JSON.stringify(validPetData)
    }; validatePetData.mockImplementation(() => {
      // Create a proper ValidationError using the imported module
      const ValidationError = require('../src/utils/errorHandler').ValidationError;
      throw new ValidationError('Validation failed', [
        { field: 'type', message: 'Type must be either "cat" or "dog"' }
      ]);
    });

    // Act
    const response = await handler(event, {});

    // Assert
    expect(validatePetData).toHaveBeenCalled();
    expect(sanitizeInput).not.toHaveBeenCalled();
    expect(transformPetData).not.toHaveBeenCalled();
    expect(putPetItem).not.toHaveBeenCalled();

    expect(response.statusCode).toBe(400);
    const body = JSON.parse(response.body);
    expect(body.error).toBe('Validation failed');
    expect(body.details).toEqual([
      { field: 'type', message: 'Type must be either "cat" or "dog"' }
    ]);
  });

  test('should handle database errors', async () => {
    // Arrange
    const event = {
      body: JSON.stringify(validPetData)
    };

    putPetItem.mockImplementation(() => {
      const error = new Error('Database operation failed');
      error.name = 'DatabaseError';
      throw error;
    });

    // Act
    const response = await handler(event, {});

    // Assert
    expect(validatePetData).toHaveBeenCalled();
    expect(sanitizeInput).toHaveBeenCalled();
    expect(transformPetData).toHaveBeenCalled();
    expect(putPetItem).toHaveBeenCalled();

    expect(response.statusCode).toBe(500);
  });

  test('should handle unexpected errors', async () => {
    // Arrange
    const event = {
      body: JSON.stringify(validPetData)
    };

    transformPetData.mockImplementation(() => {
      throw new Error('Unexpected error');
    });

    // Act
    const response = await handler(event, {});

    // Assert
    expect(validatePetData).toHaveBeenCalled();
    expect(sanitizeInput).toHaveBeenCalled();
    expect(transformPetData).toHaveBeenCalled();
    expect(putPetItem).not.toHaveBeenCalled();

    expect(response.statusCode).toBe(500);
    expect(JSON.parse(response.body).error).toBe('An internal server error occurred.');
  });
});
