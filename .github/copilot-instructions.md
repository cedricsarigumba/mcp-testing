# GitHub Copilot Instruction for Pet Information REST API

You are assisting with a serverless Pet Information REST API built using AWS SAM and Node.js. The API accepts POST requests to create pet records stored in DynamoDB.

## Guidance for Copilot

### Project Setup
- Initialize an AWS SAM project with a Node.js runtime.
- Set up `template.yaml` with:
  - One Lambda function: `PetInfoFunction`
  - One API Gateway event: `POST /pets` named `CreatePetApi`
  - A DynamoDB table: `PetsTable` with a primary key `petId` (String)
  - Use `BillingMode: PAY_PER_REQUEST`
  - Attach `DynamoDBCrudPolicy` to the Lambda for `PetsTable`
  - Add environment variable `DYNAMODB_TABLE_NAME` for the Lambda

### Application Structure
- Node.js handler should live in `app.js` (or similar).
- Use `uuid` for generating unique `petId`.
- Use `new Date().toISOString()` for `createdAt` and `updatedAt`.

### Lambda Function Behavior (`POST /pets`)
Implement the following inside the Lambda handler:
1. Parse incoming JSON body.
2. Validate fields:
   - `petName`: non-empty string
   - `type`: "cat" or "dog" (case-insensitive)
   - `color`, `breed`, `gender`: non-empty strings
   - `birthday`: valid date in `YYYY-MM-DD` format
3. Sanitize input (trim strings, normalize case where needed).
4. Transform:
   - Generate `petId`, `createdAt`, `updatedAt`
5. Save item to DynamoDB using environment-provided table name.
6. Return JSON response with `201 Created`, `petId`, and a message.

### Error Handling
- Use a centralized error module:
  - Return `400` for validation issues with detailed messages.
  - Return `500` for unhandled exceptions.
- All responses must be JSON-formatted.

### Local Testing Support
- Use `sam build` and `sam local start-api` for local testing.
- Support `curl` or Postman testing for:
  - Successful pet creation
  - Each validation failure case
  - Malformed dates or missing fields

### Documentation
- Include README.md updates for:
  - Local dev setup
  - Sample requests and responses

## Restrictions
- Do not use any external frameworks beyond `uuid` and AWS SDK.
- Keep logic modular and clean.

## Output Expectation
Generate only functional, tested code that strictly adheres to this design. Avoid boilerplate comments. Use modern JavaScript (ES6+).
