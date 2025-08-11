# Enterprise Dashboard - Complete Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Architecture](#architecture)
5. [Setup & Installation](#setup--installation)
6. [Development Guide](#development-guide)
7. [Component Documentation](#component-documentation)
8. [State Management](#state-management)
9. [Routing](#routing)
10. [API Integration](#api-integration)
11. [Build & Deployment](#build--deployment)
12. [Docker Configuration](#docker-configuration)
13. [Code Quality & Standards](#code-quality--standards)
14. [Troubleshooting](#troubleshooting)

## Project Overview

The **Enterprise Dashboard** is a React-based web application designed for enterprise-level data visualization and user management. It provides a comprehensive interface for viewing analytics, managing users, and configuring system settings.

### Key Features
- **Authentication System**: Login, password reset, and session management
- **Dashboard Analytics**: Multiple chart types for data visualization
- **User Management**: User profiles, activity tracking, and administration
- **Responsive Design**: Mobile-friendly interface using Bootstrap
- **Real-time Data**: GraphQL integration for live data updates
- **Role-based Access**: Protected routes and authorization

## Technology Stack

### Frontend
- **React 18.2.0**: Core UI framework
- **React Router DOM 5.2.0**: Client-side routing
- **Redux 5.0.0**: State management with Redux Toolkit
- **Bootstrap 5.3.2**: UI framework and styling
- **React Bootstrap 2.9.1**: Bootstrap components for React
- **ApexCharts 4.7.0**: Data visualization library
- **GraphQL 16.11.0**: API query language
- **Apollo Client 3.13.8**: GraphQL client

### Development Tools
- **Webpack 5.89.0**: Module bundler
- **Babel 7.23.6**: JavaScript compiler
- **ESLint 8.55.0**: Code linting
- **Prettier 3.1.1**: Code formatting
- **Sass 1.89.2**: CSS preprocessor

### Infrastructure
- **Docker**: Containerization
- **Nginx**: Web server and reverse proxy
- **Node.js 16**: Runtime environment

## Project Structure

```
enterprise-dashboard/
├── public/                     # Static assets
├── src/                        # Source code
│   ├── assets/                 # Images, fonts, styles
│   ├── components/             # Reusable UI components
│   │   ├── charts/            # Chart components
│   │   ├── dashboard/         # Dashboard-specific components
│   │   └── ...
│   ├── pages/                 # Page components
│   │   ├── auth/              # Authentication pages
│   │   ├── dashboard/         # Dashboard pages
│   │   ├── users/             # User management pages
│   │   ├── settings/          # Settings pages
│   │   └── reports/           # Reporting pages
│   ├── reduxes/               # Redux state management
│   │   ├── actions/           # Redux actions
│   │   ├── reducers/          # Redux reducers
│   │   └── store.js           # Redux store configuration
│   ├── router/                # Routing configuration
│   ├── utils/                 # Utility functions
│   ├── graphql/               # GraphQL queries and mutations
│   ├── App.jsx                # Main application component
│   └── index.jsx              # Application entry point
├── build/                     # Production build output
├── webpack.config.js          # Webpack configuration
├── package.json               # Dependencies and scripts
├── Dockerfile                 # Production Docker configuration
├── docker-compose.yml         # Docker Compose configuration
└── README.md                  # Basic project documentation
```

## Architecture

### Application Architecture
The application follows a **Component-Based Architecture** with the following layers:

1. **Presentation Layer**: React components for UI rendering
2. **State Management Layer**: Redux for global state management
3. **Data Layer**: GraphQL/Apollo Client for API communication
4. **Routing Layer**: React Router for navigation
5. **Utility Layer**: Helper functions and utilities

### Component Architecture
- **Functional Components**: All components use React hooks
- **Container/Presentational Pattern**: Separation of logic and presentation
- **Higher-Order Components**: For authentication and route protection

## Setup & Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://kbroIntern@bitbucket.org/kbroteam/enterprise-dashboard.git
   cd enterprise-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment configuration**
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

4. **Start development server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3005`

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint with auto-fix |
| `npm run format` | Format code with Prettier |
| `npm run watch:css` | Watch and compile SCSS |

## Development Guide

### Code Standards

#### File Naming
- React components: `.jsx` extension
- Utility files: `.js` extension
- Styles: `.scss` extension

#### Component Structure
```jsx
/** @format */
import React from 'react';
import PropTypes from 'prop-types';

const ComponentName = ({ prop1, prop2 }) => {
  // Component logic here
  
  return (
    <div>
      {/* JSX content */}
    </div>
  );
};

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

export default ComponentName;
```

#### Import Aliases
The project uses webpack aliases for clean imports:
- `@components` → `src/components`
- `@pages` → `src/pages`
- `@reduxes` → `src/reduxes`
- `@utils` → `src/utils`
- `@assets` → `src/assets`
- `@graphql` → `src/graphql`
- `@router` → `src/router`

### Git Workflow

#### Branch Naming
- Feature branches: `feature/description`
- Bug fixes: `fix/description`
- Hotfixes: `hotfix/description`

#### Commit Messages
Follow conventional commit format:
```
type: subject

body

footer
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build/tool changes

## Component Documentation

### Core Components

#### DashboardComponent
**Location**: `src/components/dashboard/DashboardComponent.jsx`
**Purpose**: Main layout wrapper for authenticated pages
**Features**:
- Sidebar navigation
- Header with notifications
- Profile management
- Responsive layout

#### Chart Components
**Location**: `src/components/charts/`
**Available Charts**:
- `PieChart.jsx`: Circular data visualization
- `VerticalChart.jsx`: Bar charts
- `HorizontalChart.jsx`: Horizontal bar charts
- `MultiLine.jsx`: Line charts
- `BoxPlot.jsx`: Statistical box plots
- `CircularProgressbar.jsx`: Progress indicators
- `SpiralChart.jsx`: Spiral data visualization

#### Form Components
**Location**: `src/components/`
- `Inputs.jsx`: Form input components
- `Buttons.jsx`: Button components
- `Alert.jsx`: Alert/notification components
- `AppModal.jsx`: Modal dialog components

### Page Components

#### Authentication Pages
- `Login.jsx`: User login form
- `ForgotPassword.jsx`: Password recovery
- `ResetPassword.jsx`: Password reset

#### Dashboard Pages
- `Overview.jsx`: Main dashboard overview
- `DashboardTab.jsx`: Tabbed dashboard interface
- `Foster.jsx`: Foster care analytics
- `InHome.jsx`: In-home services data
- `OutHome.jsx`: Out-of-home services data

#### User Management
- `Users.jsx`: User listing and management
- `UserProfile.jsx`: Individual user profiles
- `UserActivity.jsx`: User activity tracking

#### Settings
- `Settings.jsx`: Application configuration

## State Management

### Redux Store Structure

#### Actions (`src/reduxes/actions/`)
- `auth.js`: Authentication actions
- `user.js`: User management actions
- `data.js`: Data fetching actions
- `setting.js`: Settings actions
- `history.js`: Navigation history

#### Reducers (`src/reduxes/reducers/`)
- `authReducer.jsx`: Authentication state
- `userReducer.jsx`: User data state
- `dataReducer.jsx`: Application data state
- `rootReducer.jsx`: Combined reducers

#### Store Configuration
```javascript
// src/reduxes/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
```

### State Structure
```javascript
{
  auth: {
    isAuthenticated: boolean,
    user: object,
    token: string,
    loading: boolean
  },
  user: {
    users: array,
    currentUser: object,
    loading: boolean
  },
  data: {
    dashboardData: object,
    charts: object,
    loading: boolean
  }
}
```

## Routing

### Route Configuration
**File**: `src/router/routes.jsx`

```javascript
const PAGES_URL = {
  LOGIN: "/",
  FORGOT: "/forgot",
  RESET: "/forgot/reset",
  DASHBOARD: "/dashboard",
  USERS: "/dashboard/users",
  USER_PROFILE: "/dashboard/users",
  USER_ACTIVITY: "/dashboard/users",
  SETTINGS: "/dashboard/settings"
};
```

### Route Protection
- `AuthRoute`: Protects authenticated routes
- `UnAuthRoute`: Redirects authenticated users away from auth pages

### Navigation
- Programmatic navigation using `history.push()`
- Link-based navigation with React Router
- Breadcrumb navigation in dashboard

## API Integration

### GraphQL Integration
- **Client**: Apollo Client 3.13.8
- **Queries**: Located in `src/graphql/`
- **Mutations**: For data modifications
- **Subscriptions**: For real-time updates

### HTTP Client
- **Axios**: For REST API calls
- **Interceptors**: For authentication headers
- **Error Handling**: Centralized error management

### API Configuration
```javascript
// src/srvConfig.js
export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';
```

## Build & Deployment

### Development Build
```bash
npm start
```
- Hot reloading enabled
- Source maps for debugging
- Development server on port 3005

### Production Build
```bash
npm run build
```
- Optimized bundle in `build/` directory
- Minified JavaScript and CSS
- Gzip compression
- Asset optimization

### Build Output
```
build/
├── bundle.js              # Main JavaScript bundle
├── main.css               # Compiled CSS
├── index.html             # HTML template
└── assets/                # Optimized assets
```

## Docker Configuration

### Development Docker
**File**: `dev.Dockerfile`
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3005
CMD ["npm", "start"]
```

### Production Docker
**File**: `Dockerfile`
- Multi-stage build
- Nginx for serving static files
- Optimized for production

### Docker Compose
**File**: `docker-compose.yml`
```yaml
services:
  enterprise-dashboard:
    build: .
    ports:
      - "3005:3005"
    volumes:
      - .:/app
      - /app/node_modules
```

### Deployment Commands
```bash
# Development
docker-compose up --build

# Production
docker build -t enterprise-dashboard .
docker run -p 80:80 enterprise-dashboard
```

## Code Quality & Standards

### Linting
- **ESLint**: JavaScript/JSX linting
- **Configuration**: `.eslintrc`
- **Rules**: React hooks, import order, code quality

### Formatting
- **Prettier**: Code formatting
- **Configuration**: `.prettierrc`
- **Format on save**: Recommended

### Pre-commit Checks
- Lint all files
- Format code
- Run tests (if available)

### Code Review Guidelines
1. **Functionality**: Does the code work as intended?
2. **Performance**: Are there any performance issues?
3. **Security**: Are there security vulnerabilities?
4. **Maintainability**: Is the code readable and maintainable?
5. **Testing**: Are there appropriate tests?

## Troubleshooting

### Common Issues

#### Development Server Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear webpack cache
rm -rf build/
npm start
```

#### Build Issues
```bash
# Check for linting errors
npm run lint

# Clear build cache
rm -rf build/
npm run build
```

#### Docker Issues
```bash
# Rebuild Docker image
docker-compose down
docker-compose up --build

# Clear Docker cache
docker system prune -a
```

#### Port Conflicts
If port 3005 is in use:
```bash
# Find process using port
lsof -i :3005

# Kill process
kill -9 <PID>
```

### Performance Optimization

#### Bundle Size
- Use dynamic imports for code splitting
- Optimize images and assets
- Remove unused dependencies

#### Runtime Performance
- Implement React.memo for expensive components
- Use useMemo and useCallback hooks
- Optimize re-renders

### Debugging

#### Development Tools
- React Developer Tools
- Redux DevTools
- Browser Developer Tools

#### Logging
- Console logging in development
- Error boundaries for production
- Centralized error tracking

---

## Support & Maintenance

### Getting Help
1. Check this documentation
2. Review existing issues
3. Create a new issue with detailed information

### Contributing
1. Follow the coding standards
2. Write meaningful commit messages
3. Test your changes thoroughly
4. Submit pull requests for review

### Version Control
- Main branch: `master`
- Development branch: `develop`
- Feature branches: `feature/*`

---

*This documentation is maintained by the development team. For questions or updates, please contact the project maintainers.* 