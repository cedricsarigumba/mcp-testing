# Task List: Pet Information REST API

## Sequence diagram

- [x]  [AI] Create a detailed `.puml` sequence diagram under `docs/diagrams` showing the interaction flow from API Gateway to Lambda to DynamoDB, including method calls, responses, and data passed.
- [x]  [Human] Review the changes and modified as needed
- [x]  [Human] Create PR

## Lambda Function Implementation

- [x]  **Project preparation**
    - [x]  [AI] Review PLANNING.md thoroughly
    - [x]  [AI] Set up Node.js project structure (package.json, index.js for AWS lambda handler, SAM template.yaml) — only a skeleton is needed for this part. Store it in a new folder pets_api.
    - [x]  [AI] Configure `template.yaml` for the basic Lambda function (PetInfoFunction)
- [x]  **API Handler Logic (`POST /pets`)**
    - [x]  [AI] Create main Lambda handler function to process `POST` requests.
    - [x]  [AI] Parse incoming JSON request body.
- [x]  **Input Validation**
    - [x]  [AI] Implement validation for `petName` (non-empty string).
    - [x]  [AI] Implement validation for `type` (string, "cat" or "dog", case-insensitive).
    - [x]  [AI] Implement validation for `color` (non-empty string).
    - [x]  [AI] Implement validation for `breed` (non-empty string).
    - [x]  [AI] Implement validation for `gender` (non-empty string).
    - [x]  [AI] Implement validation for `birthday` (string, `YYYY-MM-DD` format, valid date).
- [x]  **Input Sanitization**
    - [x]  [AI] Implement basic sanitization for all string inputs.
- [x]  **Data Transformation**
    - [x]  [AI] Generate a unique `petId` (e.g., using `uuid` library).
    - [x]  [AI] Generate `createdAt` timestamp (ISO 8601).
    - [x]  [AI] Generate `updatedAt` timestamp (ISO 8601, same as `createdAt` on creation).
- [x]  **DynamoDB Interaction**
    - [x]  [AI] Implement logic to put the validated and transformed item into DynamoDB using AWS SDK.
    - [x]  [AI] Ensure `DYNAMODB_TABLE_NAME` environment variable is used.
- [x]  **Response Handling**
    - [x]  [AI] Implement success response (201 Created) with `petId` and success message.
- [x] Custom Error Handling
    - [x]  [AI] Develop a centralized error handling module/strategy within the Lambda.
    - [x]  [AI] Define structure for validation error responses (e.g., 400 Bad Request with details).
    - [x]  [AI] Define structure for general server error responses (e.g., 500 Internal Server Error).
    - [x]  [AI] Integrate error handling with API handler to return consistent error JSON payloads.
- [x] Local Testing
    - [x]  [Human] Setup the AWS DynamoDB table in AWS
    - [x]  [Human] Input the correct AWS credentials in `template.yaml`
    - [x]  [AI] Build the SAM application (`sam build`).
    - [x]  [AI] Invoke the function (`sam local invoke`) and test successful pet creation.
    - [x]  [AI] Test input validation errors for each field.
    - [x]  [AI] Test error handling for invalid date format for `birthday`.
    - [x]  [AI] Test error handling for missing required fields.
- [x]  [Human] Review the changes and modified as needed
- [x]  [Human] Create PR

## Unit Testing

- [x]  [AI] Set up testing framework (Jest) for the project.
- [x]  [AI] Create unit tests for input validation functions.
- [x]  [AI] Create unit tests for data transformation functions.
- [x]  [AI] Create mock tests for DynamoDB interactions.
- [x]  [AI] Create tests for error handling scenarios.
- [x]  [AI] Ensure test coverage for all critical paths in the Lambda handler.
- [x]  [Human] Review the changes and modified as needed
- [x]  [Human] Create PR

## Documentation

- [x]  [AI] Update README.md with setup instructions for local development.
- [x]  [AI] Update README.md with API usage examples (request/response).
- [ ]  [Human] Review the changes and modified as needed
- [ ]  [Human] Create PR
