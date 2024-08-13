# Note Assistant

## Description

The **Note Assistant** is a simple web application that allows users to write, save, and delete notes. It is built using **Express.js** for the back end and **HTML/CSS/JavaScript** for the front end. Notes are stored persistently in a JSON file.

You can view the Render Deployed site [Here](https://note-assistant-uo1c.onrender.com/notes)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Technologies Used](#Technologies-Used)
- [Learning Resources](#Learning-Resources)

## Installation

To run this application locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/note-taker.git
   cd note-taker

1. **Install Dependencies:**
   ```bash
   npm install express
  

1. **Start Server:**
   ```bash
   npm start
   

4. Access the application:
Open your browser and navigate to http://localhost:3001.

# Usage

1. Create a New Note:

- Click on the "Get Started" button on the landing page.
Enter a title and content for your note.
- Click the "Save Note" button. Your note will be saved and appear in the left-hand column.

2. View an Existing Note:

- Click on any note in the left-hand column to view its contents.

3. Delete a Note:

- Click the trash icon next to any note to delete it.

# API Endpoints
The application uses the following API endpoints:

- GET /api/notes: Retrieves all saved notes as JSON.
- POST /api/notes: Saves a new note. The note should be provided in the request body as JSON.
- DELETE /api/notes/:id: Deletes a note with the specified ID.

# Deployment
- This application can be deployed on platforms like Render.

## Deployment on Render

**Create a new Web Service on Render:**

- Connect your GitHub repository.
- Configure the environment and build commands (use npm install for build and npm start for start command).
- Deploy the application.

**Access the deployed application:**

- Once deployed, Render will provide a URL where the application can be accessed.

# Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for Node.js to handle routing and server logic.
- **HTML/CSS/JavaScript**: Front-end technologies for UI and interactivity.
- **JSON**: Used to store notes persistently on the server.

# Learning Resources

Here are some resources that helped me achieve this challenge for the week:

### Node.js and Express Documentation:
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/en/starter/installing.html)
- [Express.js Overview](https://expressjs.com/en/4x/api.html) - API reference and overview of Express.js.
- [Express.js Crash Course on YouTube](https://www.youtube.com/watch?v=L72fhGm1tfE) - A video tutorial covering the basics of Express.js.
- [Express.js Guide](https://expressjs.com/en/guide/routing.html) - Detailed guide on routing, middleware, and more in Express.js.

### Render Deployment:
- [Render Documentation](https://render.com/docs) - Guides and documentation for deploying web applications on Render.
- [Deploying Node.js Apps to Render](https://render.com/docs/deploy-node-express-app) - Step-by-step guide to deploying an Express.js application on Render.