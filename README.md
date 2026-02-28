# AI Dashboard Data Table

A modern, responsive, and robust data table dashboard built with React, Vite, and Tailwind CSS. This application fetches user data from a mock API (`jsonplaceholder`) and presents it in a beautiful tabular interface with essential data management features.

## Features

- **Data Fetching:** Custom `useFetch` hook to fetch data asynchronously from an external API (`https://jsonplaceholder.typicode.com/users`), including loading and error state management.

- **Search & Filtering:** Real-time search functionality by user name, powered by a custom `useDebounce` hook to optimize performance and reduce unnecessary renders/calculations.

- **Sorting:** Interactive column headers allow users to sort the table data by name in Ascending or Descending order.

- **Pagination:** Client-side pagination logic to enhance user experience when dealing with larger datasets, showing 5 entries per page by default.

- **State Management (UI):** Elegant UI components for Empty States, Loading Spinners, and Error Messages.

- **Responsive Design:** Completely mobile-friendly layout built using Tailwind CSS utility classes, featuring a glassmorphism header and dynamic shadows.

- **Reusable Components:** Well-structured component architecture (`Table`, `TableHeader`, `TableRow`, `Pagination`, `SearchBar`, etc.) for high maintainability.

## Technology Stack

- **Frontend Framework:** React 19 (via Vite 7)

- **Styling:** Tailwind CSS(`@tailwindcss/vite`)
- **Icons:** Heroicons (via SVG standard paths)

- **Linting:** ESLint 9 (with React Hooks plugins)

## Project Structure

```
src/
├── assets/                 # Static assets
├── components/             
│   ├── states/             # Reusable UI states (LoadingSpinner, ErrorMessage, EmptyState)
│   └── Table/              # Table-specific components (Table, TableHeader, TableRow, Pagination, SearchBar)
├── hooks/                  # Custom React hooks (useFetch, useDebounce, usePagination, useSort)
├── pages/                  # Page-level components
│   └── Dashboard.jsx       # Main Dashboard view combining all features
├── utils/                  # Helper functions
│   └── filterUtils.js      # Centralized filtering logic
├── App.jsx                 # Application root component
├── index.css               # Global stylesheets and Tailwind import
└── main.jsx                # Application entry point
```

## Local Project Setup

Follow these steps to run the application locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
*(Note: While this project is a Frontend React application and doesn't use Node.js as a backend server, Node.js is still strictly required installed on your machine so you can use `npm` to install dependencies and run the Vite build tools).*

### 1. Installation

Clone or download the project repository, navigate into the project directory, and install the dependencies:

```bash
npm install
```

### 2. Running the Development Server

Start the Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5174/` by default.

### 3. Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be generated inside the `dist/` directory, which can be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

## 🧩 Architectural Highlights

1. **Custom Hooks isolation:** By moving complex operations (fetching, debouncing, sorting, paginating) out of the main component into dedicated hooks (`src/hooks/`), the `Dashboard` component remains clean, declarative, and focused solely on UI assembly.
2. **Debounced Search:** Implementing a 300ms debounce step prevents the `filterByName` function from firing on every single keystroke, drastically improving performance.
3. **Tailwind v4 Integration:** Utilizing the latest Vite integration strategy for Tailwind, ensuring faster development cycles and smaller bundle sizes constraint through `@tailwindcss/vite`.