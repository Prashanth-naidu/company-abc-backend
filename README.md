# Company ABC Website

A responsive website with dynamic heading controlled via CMS, built with React and Spring Boot.

## Project Structure

```
abc-company-website/
├── frontend/          # React frontend application
└── backend/          # Spring Boot backend application
```

## Prerequisites

- Node.js (v14 or higher)
- Java JDK 17 or higher
- Maven
- MySQL/PostgreSQL (or H2 for development)

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Update application.properties with your database credentials

3. Build and run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

- GET /api/headings - Fetch the heading text
- POST /api/headings - Update the heading text

## Technologies Used

- Frontend:
  - React.js
  - Styled-components
  - Axios
  - React Router DOM

- Backend:
  - Spring Boot
  - Spring Data JPA
  - MySQL/PostgreSQL
  - Lombok

## Features

- Responsive design
- Dynamic heading management through CMS
- Real-time updates
- Cross-browser compatibility 