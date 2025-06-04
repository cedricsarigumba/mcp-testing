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

### Preperation


### Requirement Phase

#### Input
TBD

- Add the original requirements in `docs/REQUIREMENTS.md`
- Select the following AI model and prompt.

![How to send prompt for RD](image/how_to_send_prompt_for_RD.png)

#### Output
TBD

- Generated requirements will be saved in `ai_driven_dev_flow/docs/00 requirements/`
- Review the following documents:
  1. Project overview (`01 project overview.md`)
  2. As-is Business flow (`02 As is business flow.md`)
  3. To-Be Business flow (`03 To Be business flow.md`)
  4. Business requirements list (`04 Business requirements list.md`)
  5. Functional requirements list (`05 Functional requirements list.md`)
  6. Non-functional requirements list (`06 Non Functional requirements list.md`)
- Update the documents if needed
