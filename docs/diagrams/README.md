# Pet Information API Sequence Diagrams

This directory contains sequence diagrams illustrating the flow of the Pet Information API.

## Pet API Sequence Diagram (`pet_api_sequence_diagram.puml`)

This diagram illustrates the complete flow for the `POST /pets` endpoint, from API Gateway through Lambda function to DynamoDB storage.

### Workflow Steps:

1. Client sends a POST request to the API Gateway endpoint with pet information
2. API Gateway forwards the request to the Lambda function
3. Lambda function validates the input data
   - If validation fails: Returns 400 Bad Request with error details
   - If validation succeeds: Continues processing
4. Lambda generates additional fields (petId, timestamps)
5. Lambda attempts to store the pet record in DynamoDB
   - If DynamoDB operation fails: Returns 500 Internal Server Error
   - If DynamoDB operation succeeds: Returns 201 Created with petId

### How to View/Edit:

The diagram is created using PlantUML. You can render it using:
- VS Code with PlantUML extension
- Online PlantUML editor (http://www.plantuml.com/plantuml/uml/)
- PlantUML command-line tools

### Visual Representation

For a rendered PNG version of this diagram, see `pet_api_sequence_diagram.png` (if available).
