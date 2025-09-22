Contact Book Web Application
A full-stack contact management application built with React, Express.js, and Supabase. This responsive web app allows users to add, view, and delete contacts with proper validation and pagination.

Features
Frontend
Responsive Design: Works seamlessly on mobile, tablet, and desktop devices
Form Validation: Real-time validation for name, email, and phone number
Contact Management: Add and delete contacts with immediate UI updates
Modern UI: Clean, professional interface with smooth animations
Error Handling: User-friendly error messages and loading states
Backend
RESTful API: Express.js server with proper HTTP methods
Input Validation: Server-side validation for all contact data
Pagination: Fetch contacts in paginated manner for better performance
Error Handling: Comprehensive error handling with meaningful messages
Database
Supabase Integration: Modern PostgreSQL database with real-time capabilities
Data Validation: Email uniqueness and proper data types
Row Level Security: Secure data access patterns
API Endpoints
GET /contacts - Fetch all contacts (with pagination)
POST /contacts - Add a new contact
DELETE /contacts/:id - Delete a contact by ID
GET /health - Health check endpoint
Tech Stack
Frontend: React 18, TypeScript, Tailwind CSS, Lucide React
Backend: Node.js, Express.js
Database: Supabase (PostgreSQL)
Build Tools: Vite, ESLint
Development: Concurrently, Nodemon
Getting Started
Prerequisites
Node.js (v18 or higher)
Supabase account
Installation
Clone the repository (Note: This step would be done after pushing to GitHub)

git clone https://github.com/your-username/contact-book-app.git
cd contact-book-app
Install dependencies

npm install
Set up Supabase

Create a new project in Supabase
Copy your project URL and anon key
Create a .env file based on .env.example
Set up the database

Run the SQL migration to create the contacts table
Enable Row Level Security
Start the development server

npm run dev
This will start both the client (React app on port 5173) and server (Express API on port 5000).

Database Schema
The application uses a simple contacts table with the following structure:

CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
Validation Rules
Name: Required, minimum 2 characters
Email: Required, valid email format, unique
Phone: Required, exactly 10 digits
Contributing
Fork the repository
Create a feature branch
Make your changes
Add tests if applicable
Submit a pull request
