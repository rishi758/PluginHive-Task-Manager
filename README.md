\# ☁️ Cloud Task Manager



A full-stack task management application built to demonstrate practical skills in \*\*React.js, Node.js, Express, Docker, and cloud-ready deployment architecture\*\*.



The application allows users to create, view, complete, and delete tasks through a React frontend connected to a Node.js REST API.



\## 🚀 Tech Stack



\### Frontend



\* React.js

\* Vite

\* CSS

\* JavaScript



\### Backend



\* Node.js

\* Express.js

\* REST API

\* CORS

\* dotenv



\### DevOps \& Cloud



\* Docker

\* Dockerfile

\* Health Check Endpoint

\* AWS-ready architecture



\## ✨ Features



\* ➕ Add new tasks

\* 📋 View all tasks

\* ✅ Mark tasks as completed

\* 🗑️ Delete tasks

\* 📊 View task statistics

\* 🔌 REST API integration between React and Node.js

\* 🐳 Dockerized Node.js backend

\* ❤️ Health check endpoint for container and cloud deployment



\## 🏗️ Project Architecture



```text

React Frontend

&#x20;     │

&#x20;     │ HTTP Requests

&#x20;     ▼

Node.js + Express REST API

&#x20;     │

&#x20;     ▼

Docker Container

&#x20;     │

&#x20;     ▼

Cloud Deployment Ready

```



\## 📁 Project Structure



```text

PluginHive-Task-Manager/

│

├── frontend/

│   ├── src/

│   │   ├── App.jsx

│   │   ├── App.css

│   │   ├── index.css

│   │   └── main.jsx

│   │

│   ├── package.json

│   └── vite.config.js

│

├── backend/

│   ├── Dockerfile

│   ├── .dockerignore

│   ├── package.json

│   └── server.js

│

├── .gitignore

└── README.md

```



\## 🔌 API Endpoints



| Method | Endpoint         | Description            |

| ------ | ---------------- | ---------------------- |

| GET    | `/`              | Check API status       |

| GET    | `/health`        | Health check endpoint  |

| GET    | `/api/tasks`     | Get all tasks          |

| POST   | `/api/tasks`     | Create a new task      |

| PUT    | `/api/tasks/:id` | Toggle task completion |

| DELETE | `/api/tasks/:id` | Delete a task          |



\### Health Check Response



```json

{

&#x20; "status": "UP",

&#x20; "service": "Cloud Task Manager API"

}

```



\## 💻 Running the Project Locally



\### 1. Clone the repository



```bash

git clone https://github.com/rishi758/PluginHive-Task-Manager.git

cd PluginHive-Task-Manager

```



\### 2. Start the Backend



```bash

cd backend

npm install

npm start

```



The backend runs on:



```text

http://localhost:5000

```



Test the health endpoint:



```text

http://localhost:5000/health

```



\### 3. Start the Frontend



Open another terminal:



```bash

cd frontend

npm install

npm run dev

```



The React application runs on:



```text

http://localhost:5173

```



\## 🐳 Running the Backend with Docker



Build the Docker image:



```bash

cd backend

docker build -t cloud-task-manager-api .

```



Run the container:



```bash

docker run -d -p 5000:5000 --name cloud-task-manager-api-container cloud-task-manager-api

```



Check running containers:



```bash

docker ps

```



Test the API:



```text

http://localhost:5000/health

```



\## ☁️ AWS Deployment Plan



The backend is designed to be deployed using AWS services.



Planned AWS architecture:



```text

Internet

&#x20;  │

&#x20;  ▼

Application Load Balancer

&#x20;  │

&#x20;  ▼

Amazon ECS

&#x20;  │

&#x20;  ▼

AWS Fargate

&#x20;  │

&#x20;  ▼

Dockerized Node.js API

```



Additional AWS services planned for the architecture:



\* \*\*Amazon ECR\*\* – Store Docker images

\* \*\*Amazon ECS\*\* – Container orchestration

\* \*\*AWS Fargate\*\* – Serverless container execution

\* \*\*Application Load Balancer\*\* – Route incoming traffic

\* \*\*IAM\*\* – Manage permissions and access

\* \*\*Amazon CloudWatch\*\* – Application logs and monitoring

\* \*\*Amazon S3\*\* – Frontend hosting and static asset storage



\## 🎯 Learning Objectives



This project was built to gain hands-on experience with:



\* Building a React.js frontend

\* Creating REST APIs using Node.js and Express

\* Connecting frontend and backend applications

\* Managing API requests and application state

\* Containerizing applications using Docker

\* Creating health check endpoints for cloud deployments

\* Understanding container-based cloud architecture

\* Preparing an application for deployment using AWS services



\## 🔮 Future Enhancements



\* Persistent database integration

\* User authentication

\* Task categories and priorities

\* AWS ECS/Fargate deployment

\* Amazon ECR image repository

\* Application Load Balancer

\* CloudWatch monitoring

\* Amazon S3 frontend hosting

\* Redis caching

\* SQS-based asynchronous task processing



\## 👨‍💻 Author



\*\*Rishiraj Das\*\*



GitHub: https://github.com/rishi758



\---



⭐ If you found this project interesting, feel free to explore the code and architecture.



