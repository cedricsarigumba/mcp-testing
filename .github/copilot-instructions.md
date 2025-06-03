
### Github MCP
- **Always use the Github MCP server** to check for existing code, documentation, and issues in the current repository.

### 🔄 Project Awareness & Context
- **Always read `PLANNING.md`** at the start of a new conversation to understand the project's architecture, goals, style, and constraints.
- **Check `TASK.md`** before starting a new task. If the task isn’t listed, add it with a brief description and today's date.
- **Use consistent naming conventions, file structure, and architecture patterns** as described in `PLANNING.md`.

### 🔄 Project Awareness & Context
- **Always read `PLANNING.md`** at the start of a new conversation to understand the project's architecture, goals, style, and constraints.
- **Check `TASK.md`** before starting a new task. If the task isn’t listed, add it with a brief description and today's date.
- **Use consistent naming conventions, file structure, and architecture patterns** as described in `PLANNING.md`.

### 🧱 Code Structure & Modularity
- **Never create a file longer than 500 lines of code.** If a file approaches this limit, refactor by splitting it into modules or helper files.
- **Organize code into clearly separated modules**, grouped by feature or responsibility.
- **Use clear, consistent imports** (prefer relative imports within packages).

### 🧪 Testing & Reliability with Jest
* **Always write Jest unit tests for all new features** (functions, classes, components, endpoints, etc.).
* **After any logic change**, ensure existing Jest tests still pass and update them when necessary.
* **Place all tests in a `/__tests__/` directory**, structured to reflect the application's folder hierarchy.
  * For each unit (function/module/component), include:
    * ✅ **1 test for standard/expected behavior**
    * ⚠️ **1 edge case test**
    * ❌ **1 failure scenario test**
* **Isolate and test each utility/helper function individually**, especially those used in agent tools or services.


### ✅ Task Completion
- **Mark completed tasks in `TASK.md`** immediately after finishing them.
- Add new sub-tasks or TODOs discovered during development to `TASK.md` under a “Discovered During Work” section.
- Only do the tasks listed in `TASK.md`.

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
