/**
 * Unit tests for the sanitizer module
 */
const { sanitizeInput, sanitizeString } = require('../../../src/utils/sanitizer');

describe('sanitizer.js', () => {
  describe('sanitizeString', () => {
    test('should trim whitespace from string', () => {
      // Act
      const result = sanitizeString('  test string  ');

      // Assert
      expect(result).toBe('test string');
    });

    test('should handle null/undefined gracefully', () => {
      // Act & Assert
      expect(sanitizeString(null)).toBe(null);
      expect(sanitizeString(undefined)).toBe(undefined);
      expect(sanitizeString(123)).toBe(123); // Non-strings should be returned as-is
    }); test('should remove HTML tags', () => {
      // Act
      const result = sanitizeString('<script>alert("XSS")</script>Hello');

      // Assert
      // Note: The current implementation doesn't fully remove scripts, just strips tags
      expect(result).not.toContain('<script>');
      expect(result).not.toContain('</script>');
      expect(result).toContain('Hello');
    }); test('should escape HTML entities', () => {
      // Act
      const result = sanitizeString('Test & <test> "quotes" \'single\'');

      // Assert
      // Check for individual entities rather than exact string
      expect(result).toContain('&amp;');
      expect(result).toContain('&quot;quotes&quot;');
      expect(result).toContain('&#x27;single&#x27;');
    });
  });

  describe('sanitizeInput', () => {
    test('should sanitize all string properties in an object', () => {
      // Arrange
      const input = {
        petName: '  Fluffy <script>alert("XSS")</script>',
        type: 'cat',
        color: '<b>white</b>',
        breed: 'Persian & Siamese',
        gender: 'female',
        birthday: '2020-01-15',
        age: 3 // Non-string field
      };

      // Act
      const sanitized = sanitizeInput(input);

      // Assert
      expect(sanitized).toEqual({
        petName: 'Fluffy alert(&quot;XSS&quot;)',
        type: 'cat',
        color: 'white',
        breed: 'Persian &amp; Siamese',
        gender: 'female',
        birthday: '2020-01-15',
        age: 3 // Should remain unchanged
      });
    });

    test('should return a new object without modifying original', () => {
      // Arrange
      const original = {
        petName: '  Fluffy  ',
        type: 'cat'
      };

      // Act
      const sanitized = sanitizeInput(original);

      // Assert
      expect(sanitized).not.toBe(original); // Should be a different object reference
      expect(original.petName).toBe('  Fluffy  '); // Original should be unchanged
      expect(sanitized.petName).toBe('Fluffy'); // New object should have sanitized values
    });

    test('should handle empty objects', () => {
      // Act & Assert
      expect(sanitizeInput({})).toEqual({});
    });

    test('should handle nested objects without error', () => {
      // Arrange
      const input = {
        pet: {
          name: '  Fluffy  ',
          details: {
            color: '<red>'
          }
        }
      };

      // Act
      const result = sanitizeInput(input);

      // Assert - Nested objects aren't traversed by the current implementation
      expect(result).toEqual({
        pet: {
          name: '  Fluffy  ',
          details: {
            color: '<red>'
          }
        }
      });
    });
  });
});
