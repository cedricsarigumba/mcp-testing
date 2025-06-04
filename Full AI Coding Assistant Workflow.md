# Full AI Coding Assistant Workflow

This guide outlines a repeatable, structured process for working with AI coding assistants to build production-ready software.

---

## 1. Rules

These high-level principles guide efficient and effective collaboration with AI tools. They are enforced through global rules and consistent prompting:

* Use markdown files to manage the project (`README.md`, `PLANNING.md`, `TASK.md`).
* Keep files under 500 lines; split into modules when needed.
* Start fresh conversations frequently—long threads degrade response quality.
* Don’t overload the model—one task per message is ideal.
* Test early, test often—every new function should have unit tests.
* Be specific in your requests—more context and examples improve results.
* Write documentation and comments as you go—don’t delay it.

---

## 2. Planning & Task Management

Before writing code, use the LLM to define scope and break down tasks. Track these in markdown files:

### `PLANNING.md`

**Purpose:**
Outlines high-level vision, architecture, constraints, tech stack, and tools.

**Prompt to AI:**
“Use the structure and decisions outlined in `PLANNING.md`.”

**Tip:**
Reference this file at the start of every new conversation.

---

### `TASK.md`

**Purpose:**
Tracks active tasks, backlog, sub-tasks, and discoveries during the process.

**Includes:**

* Bullet list of current tasks
* Milestones
* Newly discovered requirements

**Prompt to AI:**
“Update `TASK.md` to mark XYZ as done and add ABC as a new task.”

**Note:**
The LLM can automatically update this file if instructed through global rules.

---

## 3. Global Rules (For AI IDEs)

Global rules enforce standardized behaviors across projects. All AI IDEs support both global and project-level rules.

**Examples:**

* GitHub Copilot Rules:
  [https://docs.github.com/en/copilot/using-github-copilot/code-review/configuring-coding-guidelines](https://docs.github.com/en/copilot/using-github-copilot/code-review/configuring-coding-guidelines)

---

## 4. Configuring MCP

MCP (Model Context Protocol) enables your AI assistant to interact with services. Commonly used MCPs include:

### File System MCP

(read/write, refactor, multi-file edits)
**Repo:**
[https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)

### Git MCP

(branching, diffing, committing)
**Repo:**
[https://github.com/modelcontextprotocol/servers/tree/main/src/git](https://github.com/modelcontextprotocol/servers/tree/main/src/git)

**More MCP Servers:**
Browse available servers and installation instructions:
[https://github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

---

### How to Configure MCP

**VSCode Setup:**
[https://code.visualstudio.com/docs/copilot/chat/mcp-servers](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
