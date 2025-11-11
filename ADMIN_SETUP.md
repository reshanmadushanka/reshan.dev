# Admin Panel Setup Guide

## Overview
The admin panel is built with Next.js, Ant Design, and connects to a NestJS backend for authentication.

## Project Structure

### Frontend
- **Location**: Root directory (`/app/admin`)
- **Pages**:
  - `/admin/login` - Admin login page
  - `/admin/dashboard` - Admin dashboard (protected)

### Backend
- **Location**: `/backend` directory
- **Port**: 5001
- **API Endpoint**: `http://localhost:5001/api/auth`

## Features Implemented

✅ **Admin Login System**
- Email and password authentication
- JWT token generation
- Password hashing with bcrypt
- Token storage in localStorage

✅ **Admin Dashboard**
- Protected route with authentication check
- User profile display
- Logout functionality
- Responsive design (mobile-friendly)
- Ant Design UI components

✅ **API Integration**
- Axios-based client
- Automatic token injection
- Error handling
- Base URL configuration via environment variables

## Setup Instructions

### 1. Database Setup
First, ensure PostgreSQL is running and update the backend `.env`:

```bash
# backend/.env
DATABASE_URL="postgresql://postgres:@localhost:5368/reshan_dev"
```

### 2. Create Database Tables
Run migrations:

```bash
cd backend
npm run prisma:migrate
```

### 3. Start Backend Server
```bash
cd backend
npm run dev
# Backend runs on http://localhost:5001
```

### 4. Start Frontend Server
```bash
npm run dev
# Frontend runs on http://localhost:3001
```

### 5. Access Admin Panel
- Navigate to: `http://localhost:3001/admin/login`
- First, register an admin account via the `/api/auth/register` endpoint
- Then login with credentials

## API Endpoints

### POST `/api/auth/register`
Register a new admin account.

**Request:**
```json
{
  "email": "admin@example.com",
  "password": "password123",
  "name": "Admin Name"
}
```

**Response:**
```json
{
  "message": "Admin registered successfully",
  "admin": {
    "id": "...",
    "email": "admin@example.com",
    "name": "Admin Name",
    "createdAt": "..."
  }
}
```

### POST `/api/auth/login`
Login with admin credentials.

**Request:**
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "access_token": "jwt_token_here",
  "admin": {
    "id": "...",
    "email": "admin@example.com",
    "name": "Admin Name",
    "role": "ADMIN"
  }
}
```

## Environment Variables

### Frontend (`.env.local`)
```
NEXT_PUBLIC_API_URL=http://localhost:5001
```

### Backend (`backend/.env`)
```
DATABASE_URL="postgresql://postgres:@localhost:5368/reshan_dev"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
PORT=5001
NODE_ENV="development"
FRONTEND_URL="http://localhost:3000"
```

## Technologies Used

**Frontend:**
- Next.js 16 with App Router
- React 19
- Ant Design 5
- Axios for API calls
- CSS Modules for styling

**Backend:**
- NestJS 10
- Prisma ORM
- PostgreSQL
- JWT for authentication
- bcryptjs for password hashing

## Testing the Admin Panel

1. **Register Admin** (optional, if not already registered):
   ```bash
   curl -X POST http://localhost:5001/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "email": "admin@example.com",
       "password": "password123",
       "name": "Admin User"
     }'
   ```

2. **Login**:
   - Open browser: `http://localhost:3001/admin/login`
   - Enter credentials
   - Should redirect to `/admin/dashboard` on success

3. **Logout**:
   - Click "Logout" button in the top right
   - Should redirect to login page

## Troubleshooting

### Port Already in Use
If port 5001 is in use, change it in `backend/.env` and `backend/src/main.ts`.

### Database Connection Error
Ensure PostgreSQL is running and the connection string in `.env` is correct.

### Login Fails
- Check if backend is running (`http://localhost:5001`)
- Verify the database has the admin table created (run migrations)
- Check browser console for error details

## Future Enhancements
- Add admin registration form
- Implement role-based access control
- Add user management features
- Create API documentation
- Add audit logging
