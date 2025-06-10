// filepath: c:\Users\63916\Desktop\ge\19.mcp\mcp-testing\pets_api\tests\unit\services\dynamoDbService.test.js

/**
 * Unit tests for DynamoDB service module.
 */

// Mock AWS SDK before requiring any modules
jest.mock('aws-sdk', () => {
  const mockPut = jest.fn();
  const mockGet = jest.fn();

  const mockDocumentClient = jest.fn(() => ({
    put: mockPut,
    get: mockGet
  }));

  return {
    DynamoDB: {
      DocumentClient: mockDocumentClient
    }
  };
});

// Mock environment variables before requiring the service
process.env.DYNAMODB_TABLE_NAME = 'test-pets-table';
process.env.AWS_REGION = 'ap-northeast-1';
process.env.IS_LOCAL = 'true';

const { putPetItem, getPetItem } = require('../../../src/services/dynamoDbService');
const { DatabaseError } = require('../../../src/utils/errorHandler');
const AWS = require('aws-sdk');

describe('DynamoDB Service', () => {
  let mockPut, mockGet;

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Get references to the mocked functions
    const DocumentClient = AWS.DynamoDB.DocumentClient;
    const mockInstance = new DocumentClient();
    mockPut = mockInstance.put;
    mockGet = mockInstance.get;
  });

  describe('putPetItem', () => {
    it('should successfully store pet data in DynamoDB', async () => {
      // Arrange
      const mockPetData = {
        petId: 'test-pet-123',
        petName: 'Fluffy',
        type: 'cat',
        color: 'white',
        breed: 'Persian',
        gender: 'female',
        birthday: '2020-05-15',
        createdAt: '2025-06-10T10:00:00.000Z',
        updatedAt: '2025-06-10T10:00:00.000Z'
      };

      const mockResponse = {
        ConsumedCapacity: {
          TableName: 'test-pets-table',
          CapacityUnits: 1
        }
      };

      // Mock the DynamoDB put operation
      mockPut.mockReturnValue({
        promise: jest.fn().mockResolvedValue(mockResponse)
      });

      // Act
      const result = await putPetItem(mockPetData);

      // Assert
      expect(result).toEqual(mockResponse);
      expect(mockPut).toHaveBeenCalledWith({
        TableName: 'test-pets-table',
        Item: mockPetData
      });
    });

    it('should throw DatabaseError when DynamoDB operation fails', async () => {
      // Arrange
      const mockPetData = {
        petId: 'test-pet-123',
        petName: 'Fluffy',
        type: 'cat',
        color: 'white',
        breed: 'Persian',
        gender: 'female',
        birthday: '2020-05-15',
        createdAt: '2025-06-10T10:00:00.000Z',
        updatedAt: '2025-06-10T10:00:00.000Z'
      };

      const mockError = new Error('DynamoDB operation failed');

      // Mock the DynamoDB put operation to throw an error
      mockPut.mockReturnValue({
        promise: jest.fn().mockRejectedValue(mockError)
      });

      // Act & Assert
      await expect(putPetItem(mockPetData)).rejects.toThrow(DatabaseError);
      expect(mockPut).toHaveBeenCalledWith({
        TableName: 'test-pets-table',
        Item: mockPetData
      });
    });

  });

  describe('getPetItem', () => {
    it('should successfully retrieve pet data from DynamoDB', async () => {
      // Arrange
      const petId = 'test-pet-123';
      const mockPetData = {
        petId: 'test-pet-123',
        petName: 'Fluffy',
        type: 'cat',
        color: 'white',
        breed: 'Persian',
        gender: 'female',
        birthday: '2020-05-15',
        createdAt: '2025-06-10T10:00:00.000Z',
        updatedAt: '2025-06-10T10:00:00.000Z'
      };

      const mockResponse = {
        Item: mockPetData
      };

      // Mock the DynamoDB get operation
      mockGet.mockReturnValue({
        promise: jest.fn().mockResolvedValue(mockResponse)
      });

      // Act
      const result = await getPetItem(petId);

      // Assert
      expect(result).toEqual(mockPetData);
      expect(mockGet).toHaveBeenCalledWith({
        TableName: 'test-pets-table',
        Key: { petId }
      });
    });

    it('should throw DatabaseError when DynamoDB get operation fails', async () => {
      // Arrange
      const petId = 'test-pet-123';
      const mockError = new Error('DynamoDB get operation failed');

      // Mock the DynamoDB get operation to throw an error
      mockGet.mockReturnValue({
        promise: jest.fn().mockRejectedValue(mockError)
      });

      // Act & Assert
      await expect(getPetItem(petId)).rejects.toThrow(DatabaseError);
      expect(mockGet).toHaveBeenCalledWith({
        TableName: 'test-pets-table',
        Key: { petId }
      });
    });

    it('should return undefined when pet is not found', async () => {
      // Arrange
      const petId = 'non-existent-pet';
      const mockResponse = {}; // Empty response when item not found

      // Mock the DynamoDB get operation
      mockGet.mockReturnValue({
        promise: jest.fn().mockResolvedValue(mockResponse)
      });

      // Act
      const result = await getPetItem(petId);

      // Assert
      expect(result).toBeUndefined();
      expect(mockGet).toHaveBeenCalledWith({
        TableName: 'test-pets-table',
        Key: { petId }
      });
    });

  });

});
