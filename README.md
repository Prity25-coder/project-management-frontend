# Project management Frontend

## All Task
- [x] Project setup
  - [x] install dependencies
  - [x] configure folder structure
  - [x] configure react-router-dom
  - [x] configure redux-toolkit
  - [x] configure axios and interceptors
  - [x] configure proxy
  - [ ] Install component library (material/ui)
  - [ ] Feature
    - [x] Auth
      - [x] Login
      - [x] signup
      - [x] create auth slice
      - [x] create auth thunk
      - [x] create auth service
      - [x] subscribe auth using firebase
      - [x] Logout
        - [ ] Profile view
        - [ ] Profile update

    - [x] Project
      - [x] Show all projects
      - [x] show single project details
      - [x] add new project
      - [x] update project
      - [x] delete project
      
    - [ ] Task
      - [ ] Add task to the project
      - [ ] update task
      - [ ] delete task
    - [ ] deploy on any cloud
      - [ ] update backend url in the vite.config.js (target)
      - [ ] add all env variables while deploying


# Actual Requirement

## Task: Create a simple project management tool using the React, Firebase and NodeJS.
Requirements:
  - [x] Frontend (React):
    - [x] A dashboard to list all projects.
    - [x] A form to create a new project with fields for the project name, description, and
    status.
    - [x] A detailed view to update the project status and .
    - [ ] add tasks to the project
    - [x] Use state management (Context API or Redux) to manage the application state.
  - [x] Backend (Express.js and Node.js):
    - [x] An API endpoint to fetch all projects.
    - [x] An API endpoint to fetch a single project by ID.
    - [x] An API endpoint to create a new project.
    - [x] An API endpoint to update a project and.
    - [ ] add tasks
  - [x] Database (Firebase)
    - [x] Use email signin/signup
    - [x] Use cloud firestore
  - [x] Deployment:
    - [x] Deploy the frontend on Vercel or Netlify.
    - [x] Deploy the backend on Heroku, AWS, or any cloud provider.
    - [x] Provide a link to the GitHub repository containing the code.