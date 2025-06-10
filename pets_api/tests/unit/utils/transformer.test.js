/**
 * Unit tests for the transformer module
 */
const { transformPetData, generateTimestamp } = require('../../../src/utils/transformer');

describe('transformer.js', () => {
  describe('generateTimestamp', () => {
    test('should generate a valid ISO 8601 timestamp', () => {
      // Act
      const timestamp = generateTimestamp();

      // Assert
      expect(timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);

      // Should be a valid date
      expect(() => new Date(timestamp)).not.toThrow();
    });
  });

  describe('transformPetData', () => {
    // Mock uuid to return a predictable value for testing
    const mockUuid = '123e4567-e89b-12d3-a456-426614174000';
    jest.mock('uuid', () => ({
      v4: jest.fn().mockReturnValue(mockUuid)
    }));

    // Mock current date/time
    const realDate = global.Date;
    const mockDate = new Date('2025-06-09T12:00:00.000Z');

    beforeEach(() => {
      // Mock Date to return our fixed date
      global.Date = class extends Date {
        constructor() {
          super();
          return mockDate;
        }

        static now() {
          return mockDate.getTime();
        }
      };
    });

    afterEach(() => {
      // Restore original Date
      global.Date = realDate;
    });

    test('should add petId and timestamps to pet data', () => {
      // Arrange
      const petData = {
        petName: 'Fluffy',
        type: 'cat',
        color: 'white',
        breed: 'Persian',
        gender: 'female',
        birthday: '2020-01-15'
      };

      // Act
      const result = transformPetData(petData);

      // Assert
      expect(result).toEqual({
        ...petData,
        petId: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String)
      });

      // Timestamps should be valid ISO 8601 and equal to each other on creation
      expect(result.createdAt).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
      expect(result.updatedAt).toBe(result.createdAt);
    });

    test('should not modify original input data', () => {
      // Arrange
      const petData = {
        petName: 'Fluffy',
        type: 'cat'
      };

      // Act
      const result = transformPetData(petData);

      // Assert
      expect(petData).not.toHaveProperty('petId');
      expect(petData).not.toHaveProperty('createdAt');
      expect(petData).not.toHaveProperty('updatedAt');
    });

    test('should handle empty input', () => {
      // Arrange
      const emptyData = {};

      // Act
      const result = transformPetData(emptyData);

      // Assert
      expect(result).toHaveProperty('petId');
      expect(result).toHaveProperty('createdAt');
      expect(result).toHaveProperty('updatedAt');
    });
  });
});
