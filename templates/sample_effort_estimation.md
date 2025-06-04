# 🧮 Man-Day Estimation Guideline (Web Application Development)

## 🔹 Purpose

This document outlines standardized guidelines for estimating **man-day effort** for all phases of **web application development**. It is designed for software engineers, tech leads, project managers, and LLM-powered assistants to produce **realistic, granular estimates** for project planning, sprint sizing, and capacity forecasting.

---

## 🔹 Scope

* Web-based systems (Single Page Applications, REST APIs, Admin Panels)
* Common tech stacks (e.g., React, Angular, Vue, Node.js, Django, Laravel)
* Agile-based delivery environments (2-week sprints, CI/CD pipelines)
* Estimation includes: **design, development, testing, review, and deployment**

---

## 🔹 Estimation Philosophy

| Principle              | Description                                                          |
| ---------------------- | -------------------------------------------------------------------- |
| **1 man-day**          | 8 productive work hours (excluding meetings, context switching)      |
| **Granularity**        | Decompose stories into **atomic, independently estimable** tasks     |
| **Include All Phases** | Account for coding, testing, reviews, rework, and deployment         |
| **Assume Ideal Dev**   | Mid-level engineer familiar with the stack and domain                |
| **Define Assumptions** | Every estimate must state environment, dependencies, and constraints |
| **Apply Buffer**       | Add 10–20% buffer depending on risk, complexity, and unknowns        |

---

## 🔹 Estimation Building Blocks

### 🔸 1. Frontend Development

| Feature               | Complexity | Description                                          | Man-Day Estimate |
| --------------------- | ---------- | ---------------------------------------------------- | ---------------- |
| Static Page           | Low        | Informational page (e.g., About Us)                  | 0.5 – 1          |
| Form (basic)          | Low        | Single form with 3–5 fields + validation             | 1 – 1.5          |
| Form (complex)        | Medium     | Form with conditional logic, dropdowns, dynamic data | 1.5 – 2.5        |
| Table/Grid            | Medium     | Paginated list with filters/sorting                  | 2 – 3            |
| Dashboard             | High       | Metrics + Charts (e.g., Chart.js, D3.js)             | 3 – 5            |
| SPA Navigation        | Medium     | Authenticated routes, dynamic rendering              | 1 – 2            |
| Custom UI Components  | High       | Tabs, datepickers, modals                            | 2 – 4            |
| Accessibility (WCAG)  | Add-on     | A11y for screen readers, keyboard nav                | +0.5 – 1/page    |
| Mobile Responsiveness | Add-on     | Responsive layouts (mobile-first, media queries)     | +0.5 – 1/page    |

---

### 🔸 2. Backend Development

| Feature              | Complexity | Description                           | Man-Day Estimate |
| -------------------- | ---------- | ------------------------------------- | ---------------- |
| Simple API Endpoint  | Low        | Basic CRUD (no logic)                 | 0.5 – 1          |
| Validated API        | Medium     | CRUD + validation, auth, logging      | 1 – 2            |
| Business Logic API   | High       | Contains workflows, branching logic   | 2 – 4            |
| Auth Implementation  | High       | JWT, session, OAuth2, password reset  | 2 – 4            |
| File Upload          | Medium     | Upload + S3 or local storage handling | 1.5 – 2.5        |
| DB Schema Design     | Varies     | Tables, indexes, relations            | 1 – 2            |
| Caching (Redis etc.) | Medium     | Result caching, key mgmt              | 1 – 2            |
| Background Jobs      | High       | Queues (e.g., BullMQ, Celery)         | 2 – 3            |

---

### 🔸 3. Testing & QA

| Task                | Description                        | Man-Day Estimate   |
| ------------------- | ---------------------------------- | ------------------ |
| Unit Testing        | Per module/function                | 0.5 – 1 per module |
| Integration Testing | APIs, workflows                    | 1 – 2              |
| End-to-End (E2E)    | Selenium, Cypress, Playwright      | 1.5 – 3            |
| Manual QA           | Script-based QA and bug validation | 0.5 – 1 per module |
| Regression Testing  | Run prior suite post-deploy        | 0.5 – 1            |
| Test Data Setup     | Factories or fixtures              | 0.5                |

---

### 🔸 4. DevOps & Environments

| Task                    | Description                   | Man-Day Estimate |
| ----------------------- | ----------------------------- | ---------------- |
| Local Environment Setup | Docker-compose, npm, local DB | 0.5 – 1          |
| CI/CD Pipeline Setup    | GitHub Actions, GitLab CI     | 1 – 2            |
| Dev/Staging Infra       | VMs, containers, deployment   | 1 – 1.5          |
| Prod Release Automation | Tagging, rollback, secrets    | 0.5 – 1          |
| Monitoring & Logs       | Sentry, Prometheus, Datadog   | 0.5 – 1.5        |

---

### 🔸 5. Documentation & Communication

| Task              | Description                | Man-Day Estimate |
| ----------------- | -------------------------- | ---------------- |
| API Documentation | Swagger/OpenAPI            | 0.5 – 1          |
| Feature Specs     | Notion/Confluence Writeups | 0.5 – 1          |
| Developer Notes   | Setup, caveats, gotchas    | 0.25 – 0.5       |

---

## 🔹 Buffers and Risk Adjustments

| Risk Type                                       | Add-On Buffer |
| ----------------------------------------------- | ------------- |
| New Library or Tech                             | +10–20%       |
| Poor Requirements                               | +20–30%       |
| Multi-timezone Team                             | +10%          |
| External Integration (e.g., Stripe, Google API) | +15–25%       |
| High Concurrency or Security Requirement        | +20%          |

---

## 🔹 Best Practices

* Always **log assumptions** explicitly.
* Use **relative sizing** with Fibonacci sequence (1, 2, 3, 5, 8) when exact hours aren’t feasible.
* Reference **historical estimates** and adjust based on outcome deltas.
* For sprints, avoid tasks exceeding **3 man-days** – break them down.
* Do **dry-runs of estimates** with engineers and PMs.
