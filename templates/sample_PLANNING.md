# Project Planning: Simple Task Management API with Node.js, MySQL, and Docker

## Project Overview

We’re building a simple RESTful Task Management API using **Node.js** with **Express**. This API will support basic task CRUD operations and use **MySQL** as the database. The application will be containerized using **Docker**, enabling consistent development and deployment environments.

## Architecture

### Core Components:

1. **Node.js REST API**

   * Built with Express.js
   * Expose endpoints to create, read, update, and delete tasks
   * Return JSON responses

2. **MySQL Database**

   * Store task data: `id`, `title`, `description`, `status`, `created_at`
   * Use a simple schema with a `tasks` table

3. **Docker Environment**

   * Dockerfile for Node.js backend
   * Docker Compose to orchestrate Node.js and MySQL services
   * Environment variables managed via `.env` file

## Endpoints Overview

* `GET /tasks` – Fetch all tasks
* `GET /tasks/:id` – Fetch a single task by ID
* `POST /tasks` – Create a new task
* `PUT /tasks/:id` – Update a task
* `DELETE /tasks/:id` – Delete a task

## Technology Stack

* **Language**: JavaScript (Node.js 20+)
* **Web Framework**: Express.js
* **Database**: MySQL 8+
* **ORM/Query Builder**: Knex.js or Sequelize (optional)
* **Containerization**: Docker + Docker Compose
* **Environment Config**: dotenv

## Development Steps

1. **Project Initialization**

   * Initialize Node.js project with `npm init`
   * Install Express, MySQL, dotenv, and optionally Knex.js

2. **Database Setup**

   * Create a `tasks` table with appropriate columns
   * Connect Node.js app to MySQL using `mysql2` driver or ORM

3. **API Implementation**

   * Build REST endpoints in Express
   * Add validation, error handling, and status codes

4. **Dockerization**

   * Create a `Dockerfile` for the Node.js app
   * Write `docker-compose.yml` to link Node and MySQL services
   * Map environment variables using `.env` and pass to containers

5. **Testing**

   * Use Postman or curl to test all routes
   * Add basic unit tests with Jest or Mocha if needed

## Design Principles

1. **Simplicity**: Clear API behavior and readable code
2. **Modularity**: Separate routes, controllers, and database logic
3. **Scalability**: Use structure that allows easy addition of new features
4. **Maintainability**: Use `.env`, comments, and clean folder structure

## Environment Configuration

Create a `.env.example` file with:

* `DB_HOST=localhost`
* `DB_USER=root`
* `DB_PASSWORD=your_password`
* `DB_NAME=task_db`
* `DB_PORT=3306`
* `PORT=3000`

## Expected Output

A Dockerized REST API system where users can:

* Create, retrieve, update, and delete tasks via HTTP requests
* Persist data in a MySQL database
* Run locally or on a server using Docker Compose

## Notes

During implementation:

* Document endpoints in a `README.md`
* Keep API stateless and RESTful
* Validate inputs and handle edge cases
* Use migrations (if ORM is chosen) for consistent schema setup

## Repository information
git@github.com:<account>/<repository>.git
