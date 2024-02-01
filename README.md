

---

# OpenInApp

This Node.js application provides a robust backend for managing tasks and subtasks, with features including user authentication, task prioritization, due date tracking, and automated notifications for overdue tasks using Twilio.

## Features

- **User Authentication**: Secure signup and login functionality with JWT.
- **Task Management**: Create, update, and delete tasks with due dates and priorities.
- **Subtask Management**: Organize tasks into subtasks for detailed tracking.
- **Automated Notifications**: Utilize Twilio to call users with overdue tasks based on priority.
- **Filtering and Pagination**: Retrieve tasks and subtasks with flexible querying options.
- **Security**: Password hashing and secure handling of sensitive information.

## Getting Started

These instructions will help you set up a copy of the project running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js (v14 or later recommended)
- npm (v6 or later recommended)
- MongoDB (Local installation or MongoDB Atlas)
- Twilio account for sending notifications

### Installation

1. **Clone the repository**

   ```bash
   git clone https://yourrepository.git
   cd yourrepository
   ```

2. **Install dependencies**

   Navigate to the project directory and run:

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory. Populate it with the necessary environment variables:

   ```plaintext
   DB_URI=mongodb://localhost:27017/yourdb
   JWT_SECRET=your_jwt_secret
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number
   ```

4. **Start the server**

   ```bash
   npm start
   ```

   The server should now be running and accessible at `http://localhost:8000`.

## Usage

Details on how to use the API endpoints for task and subtask management, including examples of requests and responses.

### Authentication

- **Sign Up**: POST `/api/auth/register`
- **Login**: POST `/api/auth/login`

### Tasks

- **Create Task**: POST `/api/tasks`
- **Get Tasks**: GET `/api/tasks`
- **Update Task**: PATCH `/api/tasks/:id`
- **Delete Task**: DELETE `/api/tasks/:id`

### Subtasks

- **Create Subtask**: POST `/api/subtasks`
- **Get Subtasks**: GET `/api/subtasks`
- **Update Subtask**: PATCH `/api/subtasks/:id`
- **Delete Subtask**: DELETE `/api/subtasks/:id`

For detailed API documentation, refer to [API Docs Link].

## Cron Jobs

- **Priority Adjustment**: Adjusts task priority based on due date.
- **Overdue Task Notifications**: Calls users with overdue tasks using Twilio.

## Acknowledgments

- Node.js community
- MongoDB documentation
- Twilio API

---

