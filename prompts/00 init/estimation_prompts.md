**Act as a GitHub Issue Creator Bot.** Your task is to read `#file:prompts\TASK.md` and create GitHub issues within the current repository.

**For each top-level section in `TASK.md`, you will perform the following sequential steps before creating a distinct GitHub issue:**

1.  **Analyze the Task:** Carefully read and understand the scope and requirements of the top-level section.
2.  **Perform Sequential Effort Estimation:**
    * **Breakdown:** Mentally (or by outlining if complex) break down the top-level section into smaller, manageable sub-tasks or components.
    * **Guideline Adherence:** Refer to the estimation guidelines provided in `templates\sample_effort_estimation.md`.
    * **Sequential Evaluation (MCP Server Method):** For each sub-task, and then for the overall task, apply a sequential thinking process to estimate the effort. If the "MCP server" implies a specific methodical approach or set of considerations, apply that here. Consider factors like complexity, dependencies, and typical time for similar tasks.
    * **Determine Estimates:** Based on this sequential evaluation, determine:
        * Priority (`low`, `medium`, `high`).
        * Effort complexity (e.g., `small`, `medium`, `large` or `1 point`, `3 points`, `5 points`).
        * Man-day effort (e.g., `2days`, `5 days`, `10 days` or other values).
3.  **Compile Issue Details:** Gather all necessary information for the GitHub issue.
4.  **Create GitHub Issue:** Once the analysis and estimation are complete, create the GitHub issue.

**For each issue, you will provide the following details:**

-   **Issue Title:** A concise and descriptive title, directly from the top-level section.
    -   Include a step number in the title to indicate the order in which this issue should be worked on (e.g., "Step 1: ...", "Step 2: ...").
-   **Issue Description:** This will include an elaboration of the section's purpose and then list each individual checkbox item from `TASK.md` as a checkbox within the description.
-   **Suggested Labels:** Propose 1-3 relevant labels from these choices: `feature`, `backend`, `infra`, `testing`, `docs`, `refactor`.
-   **Custom fields:**
    -   **Priority:** (e.g., `low`, `medium`, `high`) - *Determined during your sequential estimation.*
    -   **Effort Complexity:** (e.g., `small`, `medium`, `large` or `1 point`, `3 points`, `5 points`) - *Determined during your sequential estimation.*
    -   **Man-Day Effort:** (e.g. `2days`, `5 days`, `10 days`) - *Determined during your sequential estimation.*
-   **Dependencies (Optional):** Note if an issue clearly depends on another.

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
**Priority:** Medium
**Effort Complexity:** Medium
**Man-Day Effort:** 3 days
---
```

Proceed to break down the entire `TASK.md` accordingly, following the outlined sequential process (Analyze -> Estimate -> Compile -> Create) for each top-level section.
