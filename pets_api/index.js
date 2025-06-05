/**
 * Lambda handler for the Pet Information API
 *
 * @param {Object} event - API Gateway event
 * @param {Object} context - Lambda context
 * @returns {Object} API Gateway response object
 */
exports.handler = async (event, context) => {
  try {
    console.log('Event received:', JSON.stringify(event, null, 2));

    // Simple hello world response for initial setup
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Hello from Pet Info API!'
      })
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        error: 'An internal server error occurred.'
      })
    };
  }
};
