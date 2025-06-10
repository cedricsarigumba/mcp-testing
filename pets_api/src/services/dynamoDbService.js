/**
 * DynamoDB service module for interacting with the AWS DynamoDB database.
 */
const AWS = require('aws-sdk');
const { DatabaseError } = require('../utils/errorHandler');

// Check if we're running in local testing mode
const isLocalTesting = String(process.env.IS_LOCAL).toLowerCase() === 'true';

// Configure AWS SDK with environment variables
const dynamoDbOptions = {
  region: process.env.AWS_REGION || 'ap-northeast-1'
};

console.log("isLocalTesting:", isLocalTesting);
console.log("DYNAMODBTABLE", process.env.DYNAMODB_TABLE_NAME);


// For local testing, we'll use a local endpoint if provided
if (isLocalTesting) {
  console.log('Running in local test mode - not connecting to actual DynamoDB');
  // This is not needed for SAM local, as it will automatically mock the DynamoDB service
}

const dynamoDb = new AWS.DynamoDB.DocumentClient(dynamoDbOptions);

// Get the DynamoDB table name from environment variables
const DYNAMODB_TABLE_NAME = process.env.DYNAMODB_TABLE_NAME || 'pets';

/**
 * Puts a pet item into the DynamoDB table.
 *
 * @param {Object} petData - The pet data to store in DynamoDB
 * @returns {Promise<Object>} The result of the DynamoDB put operation
 * @throws {DatabaseError} If the database operation fails
 */
async function putPetItem(petData) {
  if (!DYNAMODB_TABLE_NAME) {
    throw new Error('DYNAMODB_TABLE_NAME environment variable is not set');
  }

  const params = {
    TableName: DYNAMODB_TABLE_NAME,
    Item: petData
  };

  try {
    console.log(`Storing pet data in DynamoDB table '${DYNAMODB_TABLE_NAME}'`);

    const result = await dynamoDb.put(params).promise();
    console.log('Successfully stored pet data:', petData.petId);
    return result;
  } catch (error) {
    console.error('Failed to store pet data in DynamoDB:', error);
    throw new DatabaseError('Failed to store pet data', error);
  }
}

/**
 * Gets a pet item from the DynamoDB table by its ID.
 *
 * @param {string} petId - The unique ID of the pet to retrieve
 * @returns {Promise<Object>} The retrieved pet data
 * @throws {DatabaseError} If the database operation fails
 */
async function getPetItem(petId) {
  const params = {
    TableName: DYNAMODB_TABLE_NAME,
    Key: {
      petId
    }
  };

  try {
    const result = await dynamoDb.get(params).promise();
    return result.Item;
  } catch (error) {
    console.error('Failed to retrieve pet data from DynamoDB:', error);
    throw new DatabaseError('Failed to retrieve pet data', error);
  }
}

module.exports = {
  putPetItem,
  getPetItem
};
