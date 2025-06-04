# AI-driven Development Workflow with MCP

This folder supports activities for [GEPO-729](https://gecogeco.backlog.com/view/GEPO-729).

## Overview

This project demonstrates an AI-driven development workflow for building REST APIs to manage pet information. It showcases how GenAI can assist in different phases of software development, from requirements gathering to implementation.

## AI Coding Assistant Workflow
Please see the AI Coding Assistant Workflow.md file.

## Folder Structure

TBD

```
ai_driven_dev_flow/
├── README.md
├── docs/
│   ├── REQUIREMENTS.md
│   ├── 00 requirements/
│   │   └── (Document after GenAI generated output and a human does manual review)
│   ├── 10 base design/
│   │   └── (Document after GenAI generated output and a human does manual review)
│   └── 90 ref/ ... Reference only. In actual project, this folder won't be necessary.
│       └── output from GenAI/
│           └── (Pure output from GenAI)
└── prompts/
    ├── 00 requirements/
    │   ├── 00 INSTRUCTIONS.md
    │   ├── 00 TASKS.md
    │   └── output_format/
    │       ├── 01 project overview.md
    │       ├── 02 As is business flow.md
    │       ├── 03 to be business flow.md
    │       ├── 04 business requirements list.md
    │       ├── 05 functional requirements list.md
    │       └── 06 non functional requirements list.md
```

## How to use this?

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
