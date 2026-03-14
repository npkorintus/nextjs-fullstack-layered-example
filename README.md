# Next.js App Router Layered Architecture Example

A minimal **production-style full-stack Next.js project** demonstrating how to structure a modern application using the **App Router** and a clean **layered architecture**.

This repository shows how frontend components interact with backend API routes while separating concerns between:

* UI components
* API controllers
* business logic
* data storage

The project implements a simple message system where users can view and submit messages.

---

# Tech Stack

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **API Route Handlers**
* **CSS Modules**

---

# Architecture Overview

This project uses a **layered architecture**, a common pattern used in production applications.

```
UI Components
      ↓
Frontend API Layer
      ↓
API Route (Controller)
      ↓
Service Layer (Business Logic)
      ↓
Data Layer (Storage)
```

This separation improves:

* maintainability
* testability
* scalability
* clarity of responsibilities

---

# Project Structure

```
app/
  api/messages/route.ts    # API controller
  page.tsx                 # Server component page

components/
  MessageForm.tsx          # Client component
  MessageList.tsx          # UI component

services/
  messageService.ts        # Business logic

data/
  messagesStore.ts         # Data layer (in-memory store)

lib/
  api.ts                   # Frontend API utilities

types/
  message.ts               # Shared TypeScript types

.env.example
README.md
```

---

# Key Concepts Demonstrated

### Server Components

The main page (`app/page.tsx`) fetches data on the server before rendering.

Benefits:

* less client-side JavaScript
* improved performance
* better SEO

---

### Client Components

Interactive functionality (form submission) lives in a client component:

```
components/MessageForm.tsx
```

---

### API Routes

Backend logic is exposed via a route handler:

```
/api/messages
```

Supported endpoints:

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | `/api/messages` | Fetch all messages   |
| POST   | `/api/messages` | Create a new message |

---

### Service Layer

The service layer contains **business logic and validation**.

```
services/messageService.ts
```

This layer is responsible for:

* input validation
* coordinating data access
* enforcing application rules

---

### Data Layer

The data layer abstracts storage logic.

```
data/messagesStore.ts
```

This example uses an in-memory store, but it can easily be replaced with a real database.

---

# Getting Started

## 1. Clone the repository

```
git clone https://github.com/yourusername/nextjs-app-router-layered-architecture-example.git
```

## 2. Install dependencies

```
npm install
```

## 3. Start the development server

```
npm run dev
```

Open the application:

```
http://localhost:3000
```

---

# Environment Variables

Example configuration:

```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Copy the example file:

```
cp .env.example .env.local
```

---

# Possible Extensions

This example keeps the backend intentionally simple but can easily be extended with:

* PostgreSQL + Prisma
* authentication (Auth.js / NextAuth)
* server actions
* request validation (Zod)
* React Query or SWR
* full CRUD functionality
* pagination and filtering

---

# Purpose of This Repository

This project is intended as a **learning reference** for developers who want to understand how to structure full-stack applications with modern Next.js patterns.

It demonstrates a clean separation between frontend UI, API controllers, business logic, and data access.

---

# License

MIT
