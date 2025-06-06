# Task List: Pet Information REST API

## Project Setup & Initial Configuration

- [ ]  [AI] Review PLANNING.md thoroughly
- [ ]  [AI] Initialize a new AWS SAM project (`sam init`), make sure the generated files are stored in a new folder pets_api.
- [ ]  [AI] Set up Node.js project structure (e.g., package.json, handler file index.js or similar) — only a skeleton is needed for this part.
- [ ]  [AI] Configure `template.yaml` for the basic Lambda function (PetInfoFunction)
- [ ]  [AI] Configure `template.yaml` for the API Gateway event source (`CreatePetApi`)
- [ ]  [AI] Test the project using sam local invoke and verify that it runs successfully
- [ ]  [AI] Create Github pull request using MCP
- [ ]  [Human] Review PR and modified the PR as needed

## Sequence diagram

- [ ]  [AI] Create a sequence diagram using PlantUML to illustrate the flow from API Gateway to Lambda to DynamoDB. Put it under the docs directory.
- [ ]  [AI] Create Github pull request using MCP
- [ ]  [Human] Review PR and modified the PR as needed

## Lambda Function Implementation

- [ ]  **API Handler Logic (`POST /pets`)**
    - [ ]  [AI] Create main Lambda handler function to process `POST` requests.
    - [ ]  [AI] Parse incoming JSON request body.
- [ ]  **Input Validation**
    - [ ]  [AI] Implement validation for `petName` (non-empty string).
    - [ ]  [AI] Implement validation for `type` (string, "cat" or "dog", case-insensitive).
    - [ ]  [AI] Implement validation for `color` (non-empty string).
    - [ ]  [AI] Implement validation for `breed` (non-empty string).
    - [ ]  [AI] Implement validation for `gender` (non-empty string).
    - [ ]  [AI] Implement validation for `birthday` (string, `YYYY-MM-DD` format, valid date).
- [ ]  **Input Sanitization**
    - [ ]  [AI] Implement basic sanitization for all string inputs.
- [ ]  **Data Transformation**
    - [ ]  [AI] Generate a unique `petId` (e.g., using `uuid` library).
    - [ ]  [AI] Generate `createdAt` timestamp (ISO 8601).
    - [ ]  [AI] Generate `updatedAt` timestamp (ISO 8601, same as `createdAt` on creation).
- [ ]  **DynamoDB Interaction**
    - [ ]  [AI] Implement logic to put the validated and transformed item into DynamoDB using AWS SDK.
    - [ ]  [AI] Ensure `DYNAMODB_TABLE_NAME` environment variable is used.
- [ ]  **Response Handling**
    - [ ]  [AI] Implement success response (201 Created) with `petId` and success message.
- [ ] Custom Error Handling
    - [ ]  [AI] Develop a centralized error handling module/strategy within the Lambda.
    - [ ]  [AI] Define structure for validation error responses (e.g., 400 Bad Request with details).
    - [ ]  [AI] Define structure for general server error responses (e.g., 500 Internal Server Error).
    - [ ]  [AI] Integrate error handling with API handler to return consistent error JSON payloads.
- [ ] Local Testing
    - [ ]  [Human] Setup the AWS DynamoDB table in AWS
    - [ ]  [Human] Input the correct AWS credentials in `template.yaml`
    - [ ]  [AI] Build the SAM application (`sam build`).
    - [ ]  [AI] Invoke the function (`sam local invoke`) and test successful pet creation.
    - [ ]  [AI] Test input validation errors for each field.
    - [ ]  [AI] Test error handling for invalid date format for `birthday`.
    - [ ]  [AI] Test error handling for missing required fields.
- [ ]  [AI] Create Github pull request using MCP
- [ ]  [Human] Review PR and modified the PR as needed

## Unit Testing

- [ ]  [AI] Set up testing framework (Jest) for the project.
- [ ]  [AI] Create unit tests for input validation functions.
- [ ]  [AI] Create unit tests for data transformation functions.
- [ ]  [AI] Create mock tests for DynamoDB interactions.
- [ ]  [AI] Create tests for error handling scenarios.
- [ ]  [AI] Ensure test coverage for all critical paths in the Lambda handler.
- [ ]  [AI] Create Github pull request using MCP
- [ ]  [Human] Review PR and modified the PR as needed

## Documentation

- [ ]  [AI] Update README.md with setup instructions for local development.
- [ ]  [AI] Update README.md with API usage examples (request/response).
- [ ]  [AI] Create Github pull request using MCP
- [ ]  [Human] Review PR and modified the PR as needed
