# Large Project Standard Setup

This project is a monorepo containing a **Laravel** backend and a **Nuxt** frontend. It follows strict quality standards and unified development workflows.

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+)
- Composer
- PHP 8.2+
- Docker (optional, for database/redis)

### Installation
We use a unified installer to set up both frontend and backend dependencies.

```bash
npm install        # Install root dependencies
npm run install:all # Install Frontend & Backend dependencies
```

### 🔭 Development
Run the whole stack (Frontend + Backend) with a single command:

```bash
npm run dev
```
- Frontend: http://localhost:3000
- Backend: http://localhost:8000

## 🛠 Project Structure
- **/backend**: Laravel API
- **/frontend**: Nuxt Client
- **.github**: CI/CD Workflows
- **.husky**: Git Hooks

## ✅ Quality Control
This project enforces high code quality standards.

### Linting
Lint both projects at once:
```bash
npm run lint
```
- **Backend**: Laravel Pint
- **Frontend**: ESLint

### Git Hooks
We use **Husky** to enforce checks before committing:
- **Pre-commit**: Runs `lint-staged` (only lints changed files).
- **Commit-msg**: Enforces **Conventional Commits** (e.g., `feat: user login`, `fix: button color`). 

## 🧪 Testing
```bash
npm run test:frontend # Run Vitest
npm run test:backend  # Run PHPUnit
```
