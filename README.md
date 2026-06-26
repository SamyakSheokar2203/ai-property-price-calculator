# AI Property Price Predictor\nProject starter template.
# 🏠 AI Property Price Predictor

A full-stack AI-powered Property Price Prediction application built using **React, FastAPI, XGBoost, Docker, and DevOps best practices**.

---

# Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* Recharts
* React Select

### Backend

* FastAPI
* Python
* XGBoost
* Pandas
* Joblib
* Pydantic

### DevOps

* Docker
* Docker Compose
* Nginx
* Logging
* Monitoring

---

# Project Structure

```
ai-property-price-predictor
│
├── backend
│   ├── app
│   ├── model
│   ├── logs
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend
│   ├── src
│   ├── package.json
│   ├── Dockerfile
│   └── nginx.conf
│
├── docker-compose.yml
└── README.md
```

---

# Local Development Setup (Without Docker)

## Step 1 - Clone Repository

```
git clone <repository-url>

cd ai-property-price-predictor
```

---

# Step 2 - Create Python Virtual Environment

Mac / Linux

```
python3 -m venv .venv
```

Activate

```
source .venv/bin/activate
```

Windows

```
python -m venv .venv

.venv\Scripts\activate
```

---

# Step 3 - Install Backend Packages

```
cd backend

pip install -r requirements.txt
```

---

# Step 4 - Start Backend

From the **backend** folder run

```
uvicorn app.main:app --reload
```

Backend will start on

```
http://localhost:8000
```

---

# Step 5 - Open Swagger API

Open browser

```
http://localhost:8000/docs
```

You can test all backend APIs from here.

---

# Step 6 - Open New Terminal

Go back to project root

```
cd ai-property-price-predictor
```

---

# Step 7 - Install Frontend Packages

```
cd frontend

npm install
```

---

# Step 8 - Start Frontend

```
npm run dev
```

Frontend starts on

```
http://localhost:5173
```

---

# Step 9 - Open Application

Open

```
http://localhost:5173
```

You should now see the AI Property Price Predictor dashboard.

---

# Backend API Endpoints

Health Check

```
GET /health
```

Example

```
http://localhost:8000/health
```

---

Model Information

```
GET /model-info
```

Example

```
http://localhost:8000/model-info
```

---

Prediction API

```
POST /predict
```

---

# Test the Application

1. Open the dashboard.

2. Select a corridor.

3. Enter

```
BHK

Carpet Area

Bathrooms

Floor

Amenities
```

4. Click

```
Predict Property Price
```

5. The predicted property price will be displayed on the right side.

---

# Backend Logs

Logs are automatically stored in

```
backend/logs/prediction.log
```

You can monitor prediction requests, execution time, payloads, and results from this file.

---

# Stop the Application

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

Both applications will stop.
