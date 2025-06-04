
### Github MCP
- **Always use the Github MCP server** to check for existing code, documentation, and issues in the current repository.

### Filesystem  MCP
- **Always use the Filesystem MCP server** read/write, refactor, multi-file, or files related tasks in the current repository.

### 🔄 Project Awareness & Context
- **Always read `PLANNING.md`** at the start of a new conversation to understand the project's architecture, goals, style, and constraints.
- **Check `TASK.md`** before starting a new task. If the task isn’t listed, add it with a brief description and today's date. Only work on tasks listed in `TASK.md` that is marked as "[AI]".
- **Use consistent naming conventions, file structure, and architecture patterns** as described in `PLANNING.md`.

### 🧱 Code Structure & Modularity
- **Never create a file longer than 500 lines of code.** If a file approaches this limit, refactor by splitting it into modules or helper files.
- **Organize code into clearly separated modules**, grouped by feature or responsibility.
- **Use clear, consistent imports** (prefer relative imports within packages).

### ✅ Task Completion
- **Immediately mark each task as completed in TASK.md right after finishing** that specific task.
- Add new sub-tasks or TODOs discovered during development to `TASK.md` under a "Discovered During Work" section.
- Only do the tasks listed in `TASK.md`.
- **Wait for human completion of prerequisite tasks [Human]** if a task depends on human intervention before proceeding.
- After completing a top-level task, update the necessary Github issue with relevant details, use the Github MCP server.
  - Update the Github issue ticket description and mark the task complete.**Always use the Github MCP server** to check for existing code, documentation, and issues in the current repository.

### 📎 Style & Conventions for Node.js (JavaScript)
* **Use pure JavaScript (ES6+), no TypeScript**.
* **Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)**.
* **Use `zod` for runtime data validation**.
* Avoid deep **relative imports**. Configure **module aliases** for cleaner paths.
* Use **Prettier** for code formatting and **ESLint** for linting.
* **Document all functions** using **JSDoc** format:

  ```js
  /**
   * Brief summary.
   *
   * @param {type} param1 - Description.
   * @returns {type} Description.
   */
  ```

### 📚 Documentation & Explainability
- **Update `README.md`** when new features are added, dependencies change, or setup steps are modified.
- **Comment non-obvious code** and ensure everything is understandable to a mid-level developer.
- When writing complex logic, **add an inline `# Reason:` comment** explaining the why, not just the what.

### 🧠 AI Behavior Rules
- **Never assume missing context. Ask questions if uncertain.**
- **Always confirm file paths & module names** exist before using
- **Never delete or overwrite existing code** unless explicitly instructed to or if part of a task from `TASK.md`.
