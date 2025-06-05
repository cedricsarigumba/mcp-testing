# Pet Information REST API

A serverless REST API for managing pet information, built using AWS Lambda, API Gateway, and DynamoDB.

## Project Structure

```
/
├── src/
│   ├── services/
│   │   └── service.js        # Business logic (DynamoDB operations)
│   ├── utils/
│   │   └── logger.js         # Logging utility
│   └── config/
│       └── config.js         # Configuration management
│
├── index.js                  # Main Lambda handler
├── package.json              # Dependencies and scripts
├── template.yaml             # AWS SAM template
└── README.md                 # This file
```

## Setup Instructions

### Prerequisites

- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- [Node.js](https://nodejs.org/) (v20.x)
- AWS account credentials configured

### Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Build the application:
   ```
   sam build
   ```

3. Invoke the function locally:
   ```
   sam local invoke PetInfoFunction
   ```

4. To test with API Gateway locally:
   ```
   sam local start-api
   ```

## API Documentation

This API currently supports creating new pet information records.

### Create Pet Record

**Endpoint:** POST /pets

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

**Successful Response (201 Created):**
```json
{
  "petId": "generated-uuid-string",
  "message": "Pet information saved successfully."
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Validation failed",
  "details": [
    { "field": "fieldName", "message": "Specific error message for the field" }
  ]
}
```

## License

ISC
