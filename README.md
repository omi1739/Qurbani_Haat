Live Link: https://qurbani-haat-ph.vercel.app

# Qurbani Haat

A Next.js web application for browsing and booking animals for Qurbani (sacrificial animals).

## Features

- Browse all available animals
- View detailed animal information
- Book animals with a simple form
- User authentication with email and social login (Google, GitHub)
- User profile management
- Toast notifications for user feedback

## Getting Started

### Prerequisites
- Node.js installed on your system

### Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Pages and routes
├── components/       # Reusable components
├── lib/              # Utility functions
└── assets/           # Images and static files
```

## Key Pages

- `/` - Home page
- `/all-animals` - Browse all animals
- `/all-animals/[id]` - Animal details with booking form
- `/signIn` - Login page
- `/signUp` - Registration page
- `/my-profile` - User profile
- `/update-profile` - Update user information
