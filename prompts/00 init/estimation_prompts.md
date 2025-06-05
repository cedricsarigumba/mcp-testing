## A.

VSCode version: Version: 1.100.2
Mode: Agent
Model: Claude 3.7 Sonnet

Prompt:
Act as a GitHub Issue Creator Bot. Your task is to read #file:TASK.md and create GitHub issues within the current repository.

For each top-level section in `TASK.md`, **you will create a distinct GitHub issue.**

**For each issue, you will provide the following details:**

- **Issue Title:** A concise and descriptive title, directly from the top-level section.
    - For the issue title, provide the step number on what order this issue will be work on so that it is easy to proceed in sequential order.
- **Issue Description:** This will include an elaboration of the section's purpose and then list each individual checkbox item from `TASK.md` as a checkbox within the description.
- **Suggested Labels:** Propose 1-3 relevant labels based from these choices (`feature`, `backend`, `infra`, `testing`, `docs`, `refactor`).
- **Custom fields**
    - Provide priority on whether it is `low`, `medium`, `high`
    - Suggest a rough estimate of effort complexity (e.g., `small`, `medium`, `large` or `1 point`, `3 points`, `5 points`).
    - Suggest a rough estimate of man-day effort (e.g. 2days, 5 days, 10 days or other values), use the guideline in templates\sample_effort_estimation.md and use the sequential thinking MCP server to do the estimate.
- **Dependencies (Optional):** Note if an issue clearly depends on another.

**Example Output Format for a Single Issue:**

```
---
**NEW GITHUB ISSUE**

**Title:** Step {Sequential step number}: Project Setup & Initial Configuration
**Description:** This issue covers the initial setup of the project, including repository cloning, SAM CLI installation, and basic AWS configuration.

- [ ] Install AWS SAM CLI: Ensure SAM CLI is installed and configured for your environment.
- [ ] Configure `template.yaml` for basic Lambda function: Configure the `template.yaml` file to define the initial AWS Lambda function, `PetInfoFunction`, including its basic properties and handler.
- [ ] Create `HelloWorld` Lambda function: Implement a simple "Hello World" Python Lambda function as a placeholder.
**Suggested Labels:** `setup`, `infra`
**Estimated Effort:** Medium
**MD required:** 3 days
---

```
Proceed to break down the entire `TASK.md` accordingly.
