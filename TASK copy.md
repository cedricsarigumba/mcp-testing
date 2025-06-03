# Task List: Pet Information REST API

## Project Setup & Initial Configuration

- [ ]  Review PLANNING.md thoroughly
- [ ]  Initialize a new AWS SAM project (`sam init`), make sure the generated files are still stored in the root directory.
- [ ]  Configure `template.yaml` for the basic Lambda function (PetInfoFunction)
- [ ]  Configure `template.yaml` for the API Gateway event source (`CreatePetApi`)
- [ ]  Set up Node.js project structure (e.g., `package.json`, handler file `app.js` or similar)
- [ ]  Install necessary Node.js dependencies (e.g., `uuid`, `aws-sdk` - though SDK is usually available in Lambda environment)
- [ ]  Update the necessary Github Issues with relevant details.
  - After creating each task, create a PR with a clear description of the changes made.
  - Also add a comment to the Github Issue with the PR link and a brief summary of the changes.

## Database Setup (DynamoDB via SAM)

- [ ]  Define `PetsTable` (AWS::Serverless::SimpleTable or AWS::DynamoDB::Table) in `template.yaml`
- [ ]  Specify Primary Key (`petId` - String) for `PetsTable` in `template.yaml`
- [ ]  List all required attributes for `PetsTable` in planning (for reference during Lambda dev, not all need to be in SAM template attribute definitions beyond keys)
- [ ]  Set `BillingMode` to `PAY_PER_REQUEST` for `PetsTable` (or define ProvisionedThroughput)
- [ ]  Grant Lambda function (`PetInfoFunction`) `DynamoDBCrudPolicy` for `PetsTable` in `template.yaml`
- [ ]  Set `DYNAMODB_TABLE_NAME` environment variable for the Lambda function in `template.yaml`

## Sequence diagram

- [ ]  Create a sequence diagram using PlantUML to illustrate the flow from API Gateway to Lambda to DynamoDB

## Lambda Function Implementation (Node.js - `PetInfoFunction`)

- [ ]  **API Handler Logic (`POST /pets`)**
    - [ ]  Create main Lambda handler function to process `POST` requests.
    - [ ]  Parse incoming JSON request body.
- [ ]  **Input Validation**
    - [ ]  Implement validation for `petName` (non-empty string).
    - [ ]  Implement validation for `type` (string, "cat" or "dog", case-insensitive).
    - [ ]  Implement validation for `color` (non-empty string).
    - [ ]  Implement validation for `breed` (non-empty string).
    - [ ]  Implement validation for `gender` (non-empty string).
    - [ ]  Implement validation for `birthday` (string, `YYYY-MM-DD` format, valid date).
- [ ]  **Input Sanitization**
    - [ ]  Implement basic sanitization for all string inputs.
- [ ]  **Data Transformation**
    - [ ]  Generate a unique `petId` (e.g., using `uuid` library).
    - [ ]  Generate `createdAt` timestamp (ISO 8601).
    - [ ]  Generate `updatedAt` timestamp (ISO 8601, same as `createdAt` on creation).
- [ ]  **DynamoDB Interaction**
    - [ ]  Implement logic to put the validated and transformed item into DynamoDB using AWS SDK.
    - [ ]  Ensure `DYNAMODB_TABLE_NAME` environment variable is used.
- [ ]  **Response Handling**
    - [ ]  Implement success response (201 Created) with `petId` and success message.

## Custom Error Handling

- [ ]  Develop a centralized error handling module/strategy within the Lambda.
- [ ]  Define structure for validation error responses (e.g., 400 Bad Request with details).
- [ ]  Define structure for general server error responses (e.g., 500 Internal Server Error).
- [ ]  Integrate error handling with API handler to return consistent error JSON payloads.

## Local Testing (AWS SAM)

- [ ]  Build the SAM application (`sam build`).
- [ ]  Invoke the function (`sam local invoke`).
- [ ]  Test successful pet creation using `curl` or Postman.
- [ ]  Test input validation errors for each field.
- [ ]  Test error handling for invalid date format for `birthday`.
- [ ]  Test error handling for missing required fields.
- [ ]  (If possible) Test DynamoDB interaction by checking local/mocked DB or logs.
- [ ]  Test direct Lambda invocation if needed (`sam local invoke`).

## Documentation

- [ ]  Update README.md with setup instructions for local development.
- [ ]  Update README.md with API usage examples (request/response).
