/**
 * Transformer module for transforming pet data before storing in DynamoDB.
 */
const { v4: uuidv4 } = require('uuid');

/**
 * Generates a timestamp string in ISO 8601 format.
 *
 * @returns {string} Current timestamp in ISO 8601 format
 */
function generateTimestamp() {
  return new Date().toISOString();
}

/**
 * Transforms the pet data by adding additional required fields.
 * - Adds a unique petId
 * - Adds createdAt and updatedAt timestamps
 *
 * @param {Object} petData - The validated and sanitized pet data
 * @returns {Object} Transformed pet data ready for database storage
 */
function transformPetData(petData) {
  const timestamp = generateTimestamp();

  return {
    ...petData,
    petId: uuidv4(),
    createdAt: timestamp,
    updatedAt: timestamp
  };
}

module.exports = {
  transformPetData,
  generateTimestamp
};
