/**
 * Lambda function handler for the Pet Information API.
 * Processes POST requests to store pet information in DynamoDB.
 */
const { validatePetData } = require('./src/utils/validator');
const { sanitizeInput } = require('./src/utils/sanitizer');
const { transformPetData } = require('./src/utils/transformer');
const { putPetItem } = require('./src/services/dynamoDbService');
const { handleError, ValidationError } = require('./src/utils/errorHandler');
const logger = require('./src/utils/logger');

// Check if we're running in local testing mode
const isLocalTesting = String(process.env.IS_LOCAL).toLowerCase() === 'true';

/**
 * Main Lambda handler function for processing POST requests.
 *
 * @param {Object} event - AWS Lambda Event object from API Gateway
 * @param {Object} context - AWS Lambda Context object
 * @returns {Object} HTTP response with status code and body
 */
exports.handler = async (event, context) => {
  try {
    logger.info('Processing request', { event });

    if (isLocalTesting) {
      logger.info('Running in local test mode');
    }

    // Parse the request body
    let requestBody;
    try {
      requestBody = JSON.parse(event.body);
    } catch (error) {
      throw new ValidationError('Invalid JSON in request body');
    }

    // Validate input data
    const validatedData = validatePetData(requestBody);
    logger.info('Validation successful', { validatedData });

    // Sanitize input strings
    const sanitizedData = sanitizeInput(validatedData);

    // Transform data (add petId, timestamps)
    const transformedData = transformPetData(sanitizedData);
    logger.info('Data transformed', { petId: transformedData.petId });

    // Store in DynamoDB
    await putPetItem(transformedData);

    // Return success response
    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        petId: transformedData.petId,
        message: 'Pet information saved successfully.'
      })
    };
  } catch (error) {
    logger.error('Error in handler', error);
    return handleError(error);
  }
};
