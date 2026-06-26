# 🏠 AI Property Price Predictor

A full-stack AI-powered Property Price Prediction application built using **React, FastAPI, XGBoost, Docker, and DevOps best practices**.

---

# Features

* AI-based property price prediction using XGBoost
* Modern React dashboard
* FastAPI REST API
* Dark / Light Mode
* Property comparison chart
* Logging and monitoring
* Docker support
* Docker Compose support

---

# Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* Axios
* Recharts
* React Select

## Backend

* FastAPI
* Python
* XGBoost
* Pandas
* NumPy
* Joblib
* Pydantic

## DevOps

* Docker
* Docker Compose
* Nginx
* Logging
* Monitoring

---

# Project Structure

```text
ai-property-price-predictor
│
├── backend
│   ├── app
│   ├── logs
│   ├── model
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend
│   ├── src
│   ├── public
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   └── vite.config.js
│
├── docker-compose.yml
├── .dockerignore
└── README.md
```

---

# Running the Project Locally (Without Docker)

## Step 1 - Clone Repository

```bash
git clone <repository-url>

cd ai-property-price-predictor
```

---

## Step 2 - Create Python Virtual Environment

### Mac / Linux

```bash
python3 -m venv .venv
```

Activate the virtual environment.

```bash
source .venv/bin/activate
```

### Windows

```bash
python -m venv .venv

.venv\Scripts\activate
```

---

## Step 3 - Install Backend Dependencies

Go to the backend folder.

```bash
cd backend
```

Install all required Python packages.

```bash
pip install -r requirements.txt
```

---

## Step 4 - Start Backend Server

Run the FastAPI application.

```bash
uvicorn app.main:app --reload
```

Backend will start on

```
http://localhost:8000
```

---

## Step 5 - Verify Backend

Open Swagger UI.

```
http://localhost:8000/docs
```

Health Endpoint

```
http://localhost:8000/health
```

Model Information

```
http://localhost:8000/model-info
```

Metrics

```
http://localhost:8000/metrics
```

If all these pages open successfully, the backend is running correctly.

---

## Step 6 - Open New Terminal

Return to the project root.

```bash
cd ai-property-price-predictor
```

---

## Step 7 - Install Frontend Dependencies

Go to the frontend folder.

```bash
cd frontend
```

Install all Node packages.

```bash
npm install
```

---

## Step 8 - Start Frontend

```bash
npm run dev
```

Frontend will start on

```
http://localhost:5173
```

---

## Step 9 - Test the Application

Open

```
http://localhost:5173
```

Perform the following steps:

1. Select a corridor.
2. Enter BHK.
3. Enter Carpet Area.
4. Enter Bathrooms.
5. Enter Floor.
6. Select Amenities.
7. Click **Predict Property Price**.

The predicted property price will be displayed on the dashboard.

---

## Backend Logs

Prediction logs are stored in

```
backend/logs/prediction.log
```

---

## Stop the Application

Backend

Press

```
CTRL + C
```

Frontend

Press

```
CTRL + C
```

---

# Running the Project Using Docker

Docker packages the frontend and backend into separate containers, allowing the application to run consistently on any machine.

---

## Prerequisites

Install the following:

* Docker Desktop
* Docker Compose

Verify the installation.

```bash
docker --version

docker compose version
```

---

## Step 1 - Start Docker Desktop

Ensure Docker Desktop is running.

Verify Docker is available.

```bash
docker ps
```

---

## Step 2 - Go to Project Folder

```bash
cd ai-property-price-predictor
```

---

## Step 3 - Build Docker Images

Build the frontend and backend images.

```bash
docker compose build
```

The first build may take several minutes because Docker downloads the required base images.

---

## Step 4 - Start Containers

Start both containers.

```bash
docker compose up
```

To run in the background.

```bash
docker compose up -d
```

---

## Step 5 - Verify Containers

Check whether the containers are running.

```bash
docker ps
```

Expected containers:

```
ai-backend

ai-frontend
```

---

## Step 6 - Open the Application

Frontend

```
http://localhost:3000
```

Backend Swagger

```
http://localhost:8000/docs
```

Health Check

```
http://localhost:8000/health
```

Model Information

```
http://localhost:8000/model-info
```

Metrics

```
http://localhost:8000/metrics
```

---

## Step 7 - Test the Application

1. Open the frontend.
2. Select a corridor.
3. Enter property details.
4. Select amenities.
5. Click **Predict Property Price**.
6. Verify the predicted price is displayed.

---

## View Backend Logs

Display backend logs.

```bash
docker logs ai-backend
```

Follow logs in real time.

```bash
docker logs -f ai-backend
```

---

## View Frontend Logs

```bash
docker logs ai-frontend
```

---

## Rebuild After Code Changes

If you update the application or Dockerfiles, rebuild the images.

```bash
docker compose down

docker compose build

docker compose up
```

If you want to rebuild without using cached layers.

```bash
docker compose down

docker compose build --no-cache

docker compose up
```

---

## Stop Containers

If running in the foreground, press

```
CTRL + C
```

If running in detached mode.

```bash
docker compose down
```

---

## Remove Containers, Images and Volumes

```bash
docker compose down --rmi all --volumes
```

---

# Docker Architecture

```text
                    Browser
                        │
                        ▼
          React Frontend Container
               (React + Nginx)
                        │
                  HTTP Request
                        │
                        ▼
         FastAPI Backend Container
          (Python + XGBoost Model)
                        │
                        ▼
               Machine Learning Model
                        │
                        ▼
                 JSON Response
                        │
                        ▼
               React Dashboard UI
```

---

# Docker Files

| File                | Purpose                                       |
| ------------------- | --------------------------------------------- |
| backend/Dockerfile  | Builds the FastAPI backend image              |
| frontend/Dockerfile | Builds the React production image             |
| frontend/nginx.conf | Configures Nginx                              |
| docker-compose.yml  | Starts frontend and backend together          |
| .dockerignore       | Excludes unnecessary files from Docker images |

---

# Ports Used

| Service                      | Port |
| ---------------------------- | ---- |
| Frontend (Local Development) | 5173 |
| Frontend (Docker)            | 3000 |
| Backend                      | 8000 |

---

# Backend API Endpoints

| Method | Endpoint      | Description            |
| ------ | ------------- | ---------------------- |
| GET    | `/health`     | Health check           |
| GET    | `/model-info` | Model details          |
| GET    | `/metrics`    | Monitoring metrics     |
| POST   | `/predict`    | Predict property price |

---

# Future Improvements

* GitHub Actions CI/CD
* Render Deployment
* AWS ECS Deployment
* Amazon ECR
* CloudWatch Monitoring