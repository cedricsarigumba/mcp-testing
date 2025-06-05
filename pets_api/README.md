# Pet Information REST API

A serverless REST API to register and store pet information, built using AWS Lambda, API Gateway, and DynamoDB.

## Project Setup

### Prerequisites
- Node.js 20.x
- AWS SAM CLI
- AWS CLI (configured with credentials)

### Local Development

1. **Clone the repository**
   ```
   git clone git@github.com:cedricsarigumba/mcp-testing.git
   cd pets_api
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure Environment Variables**
   Edit the `template.yaml` file and update the environment variables:
   ```yaml
   Environment:
     Variables:
       AWS_REGION: "your-region"
       AWS_ACCESS_KEY_ID: "your-access-key"
       AWS_SECRET_ACCESS_KEY: "your-secret-key"
       AWS_SESSION_TOKEN: "your-session-token" # If using temporary credentials
       DYNAMODB_TABLE_NAME: "pets"
   ```

4. **Build the SAM application**
   ```
   sam build
   ```

5. **Local testing**
   ```
   sam local invoke PetInfoFunction --event events/post-event.json
   ```

## API Endpoints

### POST /pets
Creates a new pet record in the database.

**Request Format:**
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

**Error Response (400 Bad Request):**
```json
{
  "error": "Validation failed",
  "details": [
    { "field": "fieldName", "message": "Specific error message for the field" }
  ]
}
```

## Project Structure
```
/pets_api/
├── src/
│   ├── services/
│   │   └── service.js        # Business logic for DB operations
│   ├── utils/
│   │   └── logger.js         # Logging utility
│   └── config/
│       └── config.js         # Environment configuration
│
├── index.js                  # Main Lambda handler
├── package.json              # Dependencies and scripts
├── template.yaml             # SAM template
└── README.md                 # Project documentation
```

## Testing
To create an event file for testing, create a file in an `events` directory:

```
mkdir -p events
```

Create a file `events/post-event.json` with the following content:
```json
{
  "body": "{\"petName\":\"Buddy\",\"type\":\"dog\",\"color\":\"brown\",\"breed\":\"Labrador\",\"gender\":\"male\",\"birthday\":\"2020-01-15\"}"
}
```

Then run:
```
sam local invoke PetInfoFunction --event events/post-event.json
```
