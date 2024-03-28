# Project Name: Project Management Web Application

## Introduction:
Welcome to our Project Management Web Application! This application aims to revolutionize the management of personal projects and tasks, providing users with a simple, user-friendly interface to create, manage, and track their projects and tasks efficiently.

## Local Setup:
To run the application locally, follow these steps:

1. **Prerequisites:**
   - Node.js installed on your machine.

2. **Installation:**
   - Clone this repository to your local machine.
   - Navigate to the project directory in your terminal or command prompt.
   - Run the following command to install dependencies:
     ```
     npm install
     ```

3. **Starting the Application:**
   - Once the dependencies are installed, start the application by running:
     ```
     node index.js
     ```
   - The application will start, and you can access it at http://localhost:3000 in your web browser.

## Docker Setup:
To build and run the application using Docker, follow these steps:

1. **Prerequisites:**
   - Docker installed on your machine.

2. **Building the Docker Image:**
   - Open your terminal or command prompt.
   - Navigate to the project directory.
   - Run the following command to build the Docker image:
     ```
     docker build -t my-project-web-app .
     ```

3. **Running a Docker Container:**
   - Once the Docker image is built, run the following command to start a Docker container:
     ```
     docker run -d -p 3000:3000 --name my-web-app-container my-project-web-app
     ```

4. **Accessing the Application:**
   - The application will be accessible at http://localhost:3000 in your web browser.

## Assumptions and Decisions:
During the development process, we made the following assumptions and decisions:
- Chose Express.js as the web framework for building the application due to its simplicity and robustness.
- Decided to containerize the application using Docker to ensure easy deployment and scalability across different environments.

## Additional Information:
- For any questions or support, please contact Afsa Umutoniwase at a.umutoniwa@alustudent.com.