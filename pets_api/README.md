// filepath: c:\Users\63916\Desktop\ge\19.mcp\mcp-testing\pets_api\README.md
# Pet Information REST API

A serverless API for storing pet information using AWS Lambda and DynamoDB.

## Project Overview

This API allows for storing pet information such as name, type (cat/dog), color, breed, gender, and birthday. It uses AWS Lambda for compute and DynamoDB for data storage, following the serverless architecture pattern.

## Features

- Accept POST requests to store pet information
- Input validation and sanitization
- Secure data storage in DynamoDB
- Error handling with descriptive messages

## Architecture

- AWS Lambda (Node.js 20.x)
- AWS DynamoDB
- AWS API Gateway
- AWS SAM for local development and deployment

## API Specification

### POST /api/pets

Creates a new pet record in the database.

**Request Body:**
```json
{
  "petName": "String",
  "type": "String (cat or dog)",
  "color": "String",
  "breed": "String",
  "gender": "String",
  "birthday": "String (YYYY-MM-DD)"
}
```

**Success Response (201 Created):**
```json
{
  "petId": "generated-uuid-string",
  "message": "Pet information saved successfully."
}
```

**Error Responses:**

- 400 Bad Request (Validation Error):
```json
{
  "error": "Validation failed",
  "details": [
    { "field": "fieldName", "message": "Specific error message for the field" }
  ]
}
```

- 500 Internal Server Error:
```json
{
  "error": "An internal server error occurred."
}
```

## Local Development Setup

### Prerequisites

1. Node.js 20.x
2. AWS SAM CLI
3. AWS credentials configured

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Local Testing

1. Update AWS credentials in `template.yaml` (for local testing)
2. Build the application:
   ```bash
   sam build
   ```
3. Invoke the function with a test event:
   ```bash
   sam local invoke PetInfoFunction --event tests/local-test-event.json
   ```

### Running Tests

```bash
npm test
```

## Deployment

Configure AWS credentials and region, then deploy using SAM:

```bash
sam deploy --guided
```

Follow the prompts to complete the deployment.

## Project Structure

```
/pets_api/
├── index.js                  # Main Lambda handler
├── package.json              # Dependencies and scripts
├── template.yaml             # SAM template
├── src/
│   ├── services/
│   │   └── dynamoDbService.js  # DynamoDB interaction
│   ├── utils/
│   │   ├── errorHandler.js     # Error handling module
│   │   ├── validator.js        # Input validation
│   │   ├── sanitizer.js        # Input sanitization
│   │   ├── transformer.js      # Data transformation
│   │   └── logger.js           # Logging utility
│   └── config/
│       └── config.js           # Configuration module
├── tests/                    # Test files
│   ├── local-test-event.json
│   └── error-*.json          # Various error test cases
└── README.md                 # Project documentation
```
