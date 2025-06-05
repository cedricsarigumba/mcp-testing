/**
 * Validator module for pet data input validation using zod.
 */
const { z } = require('zod');
const { ValidationError } = require('./errorHandler');

// Regex pattern for YYYY-MM-DD date format
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Zod schema for pet data validation.
 */
const petSchema = z.object({
  petName: z.string().min(1, 'Pet name is required'),
  type: z.string().min(1).transform(val => val.toLowerCase())
    .refine(val => ['cat', 'dog'].includes(val), {
      message: 'Type must be either "cat" or "dog"'
    }),
  color: z.string().min(1, 'Color is required'),
  breed: z.string().min(1, 'Breed is required'),
  gender: z.string().min(1, 'Gender is required'),
  birthday: z.string().regex(datePattern, 'Birthday must be in YYYY-MM-DD format')
    .refine(value => {
      // Additional validation to ensure it's a valid date
      const date = new Date(value);
      return !isNaN(date.getTime());
    }, {
      message: 'Birthday must be a valid date'
    })
});

/**
 * Validates pet data against defined schema and constraints.
 *
 * @param {Object} data - The pet data to validate
 * @returns {Object} The validated pet data
 * @throws {ValidationError} If validation fails
 */
function validatePetData(data) {
  try {
    return petSchema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const details = error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }));
      throw new ValidationError('Validation failed', details);
    }
    throw error;
  }
}

module.exports = {
  validatePetData
};
