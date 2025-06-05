/**
 * Sanitizer module for cleaning and securing input data.
 */

/**
 * Sanitizes a string input by trimming whitespace and removing
 * potentially harmful characters.
 *
 * @param {string} input - String to sanitize
 * @returns {string} Sanitized string
 */
function sanitizeString(input) {
  if (typeof input !== 'string') return input;

  // Trim whitespace
  let sanitized = input.trim();

  // Replace potential script tags or HTML entities
  sanitized = sanitized
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');

  return sanitized;
}

/**
 * Sanitizes all string values in the pet data object.
 *
 * @param {Object} data - The validated pet data
 * @returns {Object} Object with sanitized string values
 */
function sanitizeInput(data) {
  const sanitizedData = { ...data };

  Object.keys(sanitizedData).forEach(key => {
    if (typeof sanitizedData[key] === 'string') {
      sanitizedData[key] = sanitizeString(sanitizedData[key]);
    }
  });

  return sanitizedData;
}

module.exports = {
  sanitizeInput,
  sanitizeString
};
