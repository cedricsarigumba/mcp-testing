# AI-driven Development Workflow with MCP

This folder supports activities for [GEPO-729](https://gecogeco.backlog.com/view/GEPO-729).

## Overview

This project demonstrates an AI-driven development workflow for building REST APIs to manage pet information. It showcases how GenAI can assist in different phases of software development, from requirements gathering to implementation.

## AI Coding Assistant Workflow
Please see the AI Coding Assistant Workflow.md file.

## Folder Structure

```
/ai_driven_dev_flow/
├── docs/
│   ├── REQUIREMENTS.md
│   ├── diagrams/                     # For sequence diagrams and other visual documentation
├── src/                              # Source code directory
│   ├── pets-api/                     # Main application code
│   │   ├── models/                   # Data models
│   │   ├── utils/                    # Utility functions
│   │   └── tests/                    # Unit tests
│   └── templates/                    # SAM templates
│   │   └── template.yaml
│   └── index.js
├── .github/                          # GitHub workflows and templates
│   ├── workflows/                    # CI/CD workflows
│   ├── commit-instructions.md
│   └── copilot-instructions.md
├── .vscode/                          # VS Code configuration
├── .gitignore
├── prompts/                          # AI prompts
│   ├── PLANNING.md                   # Overall planning document
│   ├── PLANNING.md                   # Overall TASK document
│   ├── prompts.md                    # Generic prompts
│   ├── 00 init/                      # To create the PLANNING.md and TASK.md files
│       ├── TASK.md
│       └── prompts.md
├── examples/                         # Example code and templates
│   ├── sample_PLANNING.md
│   ├── sample_TASK.md
│   └── sample_template.yaml
├── README.md
└── AI Coding Assistant Workflow.md
```

## How to use this?

### 1. Preparation
> **Reason:** This step ensures everyone starts with clear requirements and a shared plan, making the workflow organized and efficient.

#### Input

- Add the original requirements in `docs/REQUIREMENTS.md`
- Run the prompt "prompts\00 Init\init_prompts.md > A"

#### Output

- It will generate two files under \prompts:
  - PLANNING.md
  - TASK.md
- Update the documents if needed

### 2. Ticket estimation
> **Reason:** Estimating tickets at this stage helps allocate resources effectively, set realistic timelines, and prioritize tasks based on complexity and effort required.

#### Input

- Run the prompt "prompts\02 Ticket estimation\estimation_prompts.md > A"

#### Output

- The AI will review the task details, generate an estimate for each task, and automatically create a corresponding ticket issue in GitHub.
- Each ticket will include the estimated effort, relevant context, and links to related documentation or requirements.
- Review and adjust the generated tickets as needed before starting implementation.

### 3. Project Setup & Initial Configuration
> **Reason:** Proper setup for initial project files.

#### Input

- Run the prompt "prompts\02 Project Setup & Initial Configuration\setup_prompts.md > A"

#### Output

- The AI will perform the task that is mentioned in the prompts\TASK.md

## Quick Start Guide

### Prerequisites

1. **Node.js 20.x** - [Download](https://nodejs.org/)
2. **AWS SAM CLI** - [Installation Guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
3. **AWS CLI** - Configured with your credentials
4. **Git** - For version control

### Running the Pet Information API

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
   ```bash
   aws configure
   ```

4. **Build and start the local API:**
   ```bash
   sam build
   sam local start-api
   ```

5. **Test the API:**
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

### API Usage Examples

#### Create a Pet Record

**Endpoint:** `POST /api/pets`

**Request Body:**
```json
{
  "petName": "Max",
  "type": "dog",
  "color": "brown",
  "breed": "Golden Retriever",
  "gender": "male",
  "birthday": "2019-06-15"
}
```

**Success Response (201):**
```json
{
  "petId": "123e4567-e89b-12d3-a456-426614174000",
  "message": "Pet information saved successfully."
}
```

**Error Response (400):**
```json
{
  "error": "Validation failed",
  "details": [
    { "field": "type", "message": "Type must be either 'cat' or 'dog'" }
  ]
}
```

For detailed API documentation and more examples, see the [pets_api README](./pets_api/README.md).

