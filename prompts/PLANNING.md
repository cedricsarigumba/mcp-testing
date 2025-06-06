# Project Planning: Pet Information REST API

## Project Overview
The goal of this project is to develop a backend system consisting of a REST API to register and store pet information. The system will be built on AWS, utilizing Lambda for compute and DynamoDB for data storage. The development will leverage the AWS Serverless Application Model (SAM) for local testing and deployment. This plan outlines the architecture, development process, and key considerations for building this API.

## Architecture

### Core Components:
1.  **REST API Endpoint**: A single endpoint to accept `POST` requests for creating new pet records.
2.  **AWS Lambda Function**: The compute resource written in Node.js that will process incoming API requests, validate data, and interact with DynamoDB.
3.  **AWS DynamoDB Table**: The NoSQL database used to store pet information.
4.  **AWS SAM (Serverless Application Model)**: Framework for defining serverless application resources, enabling local testing and streamlined deployment.
5.  **Custom Error Handling Module**: A dedicated mechanism within the Lambda function to manage and respond to errors gracefully.

### Code Structure

```text
/lambda-function/
│
├── src/
│   ├── handlers/
│   │   └── index.js          # Main Lambda handler
│   ├── services/
│   │   └── service.js        # Business logic (e.g., DB, API calls)
│   ├── utils/
│   │   └── logger.js         # Logging or helper functions
│   └── config/
│       └── config.js         # Environment/config management
│
├── package.json              # Dependencies and scripts
└── README.md                 # Project overview
```

### Technology Stack:
-   **Language**: Node.js 20.x (as per requirements)
-   **Runtime Environment**: AWS Lambda
-   **Database**: AWS DynamoDB
-   **Infrastructure as Code/Local Development**: AWS SAM CLI
-   **AWS SDK**: AWS SDK for JavaScript in Node.js (for DynamoDB interaction)

## Development Process

The development will proceed in the following stages:

1.  **Project Setup & SAM Initialization**:
    * Initialize a new AWS SAM project (`sam init`).
    * Configure the `template.yaml` file for the basic Lambda function.
    * Set up project structure for Node.js (e.g., `package.json`, handler file).

2.  **Sequence Diagram Design (PlantUML):**:
    * Create a sequence diagram using PlantUML to visualize the flow of a typical CreatePet API request.
    * Include interactions between the client, API Gateway, Lambda function, and DynamoDB.
    * Save the diagram as docs/create_pet_sequence.puml and render as an image (create_pet_sequence.png) for documentation.

3.  **Lambda Function Implementation (Node.js)**:
    * **API Handler**: Create the main handler function for the `POST /pets` endpoint.
    * **Input Validation**:
        * `petName`: Must be a non-empty string.
        * `type`: Must be either "cat" or "dog" (case-insensitive, stored consistently).
        * `color`: Must be a non-empty string.
        * `breed`: Must be a non-empty string.
        * `gender`: Must be a non-empty string.
        * `birthday`: Must be a string in `YYYY-MM-DD` format and represent a valid date.
    * **Input Sanitization**: Sanitize all string inputs to prevent potential injection issues (though DynamoDB is less susceptible than SQL, it's good practice).
    * **Data Transformation**:
        * Generate a unique `petId` (e.g., using `uuid` library).
        * Add `createdAt` and `updatedAt` timestamps.
    * **DynamoDB Interaction**:
        * Use the AWS SDK to put the validated and transformed pet item into the DynamoDB table.
    * **Response Handling**: Return appropriate success (e.g., 201 Created with petId) or error responses.

4.  **Custom Error Handling Implementation**:
    * Develop a centralized error handling mechanism.
    * Define custom error types or use a standard approach for different error scenarios (e.g., validation errors, database errors).
    * Ensure API responses for errors are consistent and informative (e.g., JSON payload with an error message).

5.  **Local Testing with AWS SAM**:
    * Use `sam local invoke` for direct Lambda function testing.
    * Iteratively test validation, data storage, and error handling.

## Design Principles

1.  **Clear API Contract**: The API endpoint (`POST /pets`) will have a well-defined request and response schema.
2.  **Robust Validation & Sanitization**: Strict validation rules for all input fields and sanitization to ensure data integrity and security.
3.  **Effective Error Handling**: Implement custom error handling to provide meaningful error messages to the client without exposing internal details.
4.  **Statelessness**: Lambda functions will be stateless, with all necessary state managed in DynamoDB.
5.  **Scalability & Cost-Effectiveness**: Leverage the inherent scalability of Lambda and DynamoDB (consider On-Demand capacity for DynamoDB initially).
6.  **Testability**: Emphasize local testing using AWS SAM to ensure reliability before deployment.
7.  **Idempotency**: While `POST` is not typically idempotent, ensure the system can handle retries gracefully if a client retries due to network issues (e.g., by checking if a pet with similar critical details already exists, though this adds complexity and might not be strictly required by the initial brief).

## Data Model (DynamoDB)

* **Table Name**: `pets` (or as configured in `template.yaml`)E
* **Primary Key**:
    * Partition Key: `petId` (String, e.g., UUID)
* **Attributes**:
    * `petId`: String (Generated unique identifier)
    * `petName`: String
    * `type`: String ("cat" or "dog")
    * `color`: String
    * `breed`: String
    * `gender`: String
    * `birthday`: String (Format: "YYYY-MM-DD")
    * `createdAt`: String (ISO 8601 timestamp)
    * `updatedAt`: String (ISO 8601 timestamp)

## API Specification

* **Endpoint**: `POST /api/pets`
* **Method**: `POST`
* **Request Body (JSON)**:
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
* **Success Response (201 Created)**:
    ```json
    {
      "petId": "generated-uuid-string",
      "message": "Pet information saved successfully."
    }
    ```
* **Error Responses**:
    * **400 Bad Request (Validation Error)**:
        ```json
        {
          "error": "Validation failed",
          "details": [
            { "field": "fieldName", "message": "Specific error message for the field" }
            // ... other field errors
          ]
        }
        ```
        *(Or a simpler format like `{"error": "Invalid input for field X: reason"}`)*
    * **500 Internal Server Error**:
        ```json
        {
          "error": "An internal server error occurred."
        }
        ```

## AWS SAM `template.yaml` Highlights
* Use the sample file in the samples\sample_template.yaml

## Expected Output

* A fully functional AWS SAM project directory.
* A Node.js Lambda function capable of:
    * Receiving pet data via sam local invoke request.
    * Validating and sanitizing the input data.
    * Storing the pet information in a DynamoDB table.
    * Returning appropriate success or custom error responses.
* The ability to test the entire flow locally using `sam local invoke`.

## Notes

* This plan focuses solely on the backend API implementation as per the requirements. UI/Frontend components are explicitly out of scope.
* Consider adding logging (e.g., using `console.log` which goes to CloudWatch Logs) for debugging and monitoring purposes.
* Dependency management for Node.js (e.g., `npm install` for libraries like `uuid`) should be handled within the SAM build process.
