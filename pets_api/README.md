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

## API Usage Examples

### Successful Pet Creation

**Request:**
```bash
curl -X POST http://localhost:3000/api/pets \
  -H "Content-Type: application/json" \
  -d '{
    "petName": "Fluffy",
    "type": "cat",
    "color": "white",
    "breed": "Persian",
    "gender": "female",
    "birthday": "2020-03-15"
  }'
```

**Response (201 Created):**
```json
{
  "petId": "123e4567-e89b-12d3-a456-426614174000",
  "message": "Pet information saved successfully."
}
```

### Validation Error Examples

#### Missing Required Fields

**Request:**
```bash
curl -X POST http://localhost:3000/api/pets \
  -H "Content-Type: application/json" \
  -d '{
    "petName": "Fluffy",
    "color": "white",
    "breed": "Persian"
  }'
```

**Response (400 Bad Request):**
```json
{
  "error": "Validation failed",
  "details": [
    { "field": "type", "message": "Type is required and must be either 'cat' or 'dog'" },
    { "field": "gender", "message": "Gender is required" },
    { "field": "birthday", "message": "Birthday is required and must be in YYYY-MM-DD format" }
  ]
}
```

#### Invalid Pet Type

**Request:**
```bash
curl -X POST http://localhost:3000/api/pets \
  -H "Content-Type: application/json" \
  -d '{
    "petName": "Tweety",
    "type": "bird",
    "color": "yellow",
    "breed": "Canary",
    "gender": "male",
    "birthday": "2021-05-10"
  }'
```

**Response (400 Bad Request):**
```json
{
  "error": "Validation failed",
  "details": [
    { "field": "type", "message": "Type must be either 'cat' or 'dog'" }
  ]
}
```

#### Invalid Date Format

**Request:**
```bash
curl -X POST http://localhost:3000/api/pets \
  -H "Content-Type: application/json" \
  -d '{
    "petName": "Max",
    "type": "dog",
    "color": "brown",
    "breed": "Golden Retriever",
    "gender": "male",
    "birthday": "2020-13-01"
  }'
```

**Response (400 Bad Request):**
```json
{
  "error": "Validation failed",
  "details": [
    { "field": "birthday", "message": "Birthday must be a valid date in YYYY-MM-DD format" }
  ]
}
```

### Testing with Different Tools

#### Using Postman
1. Create a new POST request to `http://localhost:3000/api/pets`
2. Set Content-Type header to `application/json`
3. Add the pet data in the request body
4. Send the request

#### Using JavaScript/Node.js
```javascript
const fetch = require('node-fetch');

const createPet = async (petData) => {
  try {
    const response = await fetch('http://localhost:3000/api/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petData),
    });
    
    const result = await response.json();
    console.log('Response:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Example usage
createPet({
  petName: 'Buddy',
  type: 'dog',
  color: 'golden',
  breed: 'Labrador',
  gender: 'male',
  birthday: '2019-08-22'
});
```

#### Using Python
```python
import requests
import json

def create_pet(pet_data):
    url = 'http://localhost:3000/api/pets'
    headers = {'Content-Type': 'application/json'}
    
    try:
        response = requests.post(url, headers=headers, json=pet_data)
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None

# Example usage
pet_data = {
    "petName": "Whiskers",
    "type": "cat",
    "color": "gray",
    "breed": "Maine Coon",
    "gender": "female",
    "birthday": "2018-12-03"
}

result = create_pet(pet_data)
print(json.dumps(result, indent=2))
```

## Local Development Setup

### Prerequisites

1. **Node.js 20.x** - Download from [nodejs.org](https://nodejs.org/)
2. **AWS SAM CLI** - Install following [AWS SAM CLI Installation Guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
3. **AWS CLI** - Install and configure with your AWS credentials
4. **Git** - For version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/cedricsarigumba/mcp-testing.git
   cd mcp-testing/pets_api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure AWS credentials:**
   
   **Option A: Using AWS CLI (Recommended)**
   ```bash
   aws configure
   ```
   
   **Option B: Using environment variables:**
   ```bash
   export AWS_ACCESS_KEY_ID=your_access_key_id
   export AWS_SECRET_ACCESS_KEY=your_secret_access_key
   export AWS_DEFAULT_REGION=ap-northeast-1
   ```

4. **Update template.yaml for local testing:**
   - Replace the placeholder AWS credentials in `template.yaml` with your actual credentials
   - Ensure the DynamoDB table name matches your AWS setup

### Local Testing

#### 1. Build the application:
```bash
sam build
```

#### 2. Test with sample data:
```bash
# Test successful pet creation
sam local invoke PetInfoFunction --event tests/local-test-event.json

# Test validation errors
sam local invoke PetInfoFunction --event tests/error-missing-fields.json
sam local invoke PetInfoFunction --event tests/error-invalid-type.json
sam local invoke PetInfoFunction --event tests/error-invalid-date.json
```

#### 3. Start local API Gateway:
```bash
sam local start-api
```
Then test using curl or Postman at `http://localhost:3000/api/pets`

### Running Tests

#### Unit Tests:
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

#### Code Quality:
```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## Deployment

### Prerequisites for Deployment
- AWS CLI configured with appropriate permissions
- IAM permissions for Lambda, DynamoDB, API Gateway, and CloudFormation

### Deploy to AWS

1. **Build the application:**
   ```bash
   sam build
   ```

2. **Deploy with guided setup (first time):**
   ```bash
   sam deploy --guided
   ```
   
   Follow the prompts to configure:
   - Stack name (e.g., `pet-info-api`)
   - AWS Region (e.g., `ap-northeast-1`)
   - Confirm changes before deploy: `Y`
   - Allow SAM CLI IAM role creation: `Y`
   - Save parameters to configuration file: `Y`

3. **Subsequent deployments:**
   ```bash
   sam deploy
   ```

### Environment Variables

The following environment variables are configured in `template.yaml`:

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `DYNAMODB_TABLE_NAME` | Name of the DynamoDB table | `PetsTable` |
| `AWS_REGION` | AWS region for DynamoDB | `ap-northeast-1` |
| `IS_LOCAL` | Flag for local development | `false` |
| `LOG_LEVEL` | Logging level | `INFO` |

## Troubleshooting

### Common Issues

#### 1. "Module not found" errors
```bash
# Ensure dependencies are installed
npm install

# Clean install if issues persist
rm -rf node_modules package-lock.json
npm install
```

#### 2. AWS credentials not configured
```bash
# Configure AWS CLI
aws configure

# Or set environment variables
export AWS_ACCESS_KEY_ID=your_key
export AWS_SECRET_ACCESS_KEY=your_secret
export AWS_DEFAULT_REGION=ap-northeast-1
```

#### 3. DynamoDB table not found
- Ensure the DynamoDB table exists in your AWS account
- Check that the table name in `template.yaml` matches your actual table name
- Verify the AWS region is correct

#### 4. SAM build fails
```bash
# Ensure SAM CLI is installed and updated
sam --version

# Update SAM CLI if needed
pip install --upgrade aws-sam-cli
```

#### 5. Local API Gateway not responding
```bash
# Check if port 3000 is available
netstat -an | grep 3000

# Use a different port if needed
sam local start-api --port 3001
```

### Debug Logs

Enable debug logging by setting the `LOG_LEVEL` environment variable:

```bash
# In template.yaml, update the environment variables:
LOG_LEVEL: "DEBUG"
```

### Performance Monitoring

After deployment, monitor your Lambda function using:
- AWS CloudWatch Logs
- AWS X-Ray (if enabled)
- AWS CloudWatch Metrics

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
