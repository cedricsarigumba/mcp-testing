# Pet Information API Diagrams

This directory contains diagrams that document the architecture and flow of the Pet Information API.

## Sequence Diagram

The `pet_api_sequence_diagram.puml` file contains a PlantUML sequence diagram that illustrates the interaction flow between:

1. Client
2. API Gateway
3. Lambda Function
4. DynamoDB

The sequence diagram covers:
- Request processing from client to API Gateway to Lambda
- Data validation within Lambda
- Different paths for validation success/failure
- DynamoDB interactions for storing pet data
- Response handling for success and error cases
- Error handling mechanisms

## Viewing the Diagrams

To view the PlantUML diagram:

1. Install a PlantUML extension/viewer for your IDE (e.g., PlantUML extension for VS Code)
2. Or use the [PlantUML Web Server](http://www.plantuml.com/plantuml/uml/)
3. Open the `.puml` file with your PlantUML viewer

## Generating PNG/SVG Files

You can generate PNG or SVG files from the PlantUML source using:

```bash
plantuml pet_api_sequence_diagram.puml
```

This will create a `pet_api_sequence_diagram.png` file.

For SVG output:

```bash
plantuml -tsvg pet_api_sequence_diagram.puml
```

## Adding New Diagrams

When adding new diagrams, please follow these guidelines:
1. Use PlantUML for consistency
2. Include a descriptive filename
3. Add documentation in this README about the purpose of the diagram
4. Follow the same styling conventions as existing diagrams
