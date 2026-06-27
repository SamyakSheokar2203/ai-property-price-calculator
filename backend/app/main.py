from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException

import time

from app.schemas import PropertyRequest
from app.predictor import predict_price

from app.logger import logger

import app.monitoring as monitoring


app = FastAPI(
    title="AI Property Price Predictor",
    description="AI Powered Property Price Prediction API",
    version="1.0.0",
)


# -------------------------------------------------
# Startup Event
# -------------------------------------------------

@app.on_event("startup")
def startup():

    logger.info("=" * 60)
    logger.info("Application Started")
    logger.info("AI Property Price Predictor")
    logger.info("=" * 60)


# -------------------------------------------------
# CORS
# -------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        # Render Frontend
        "https://ai-property-price-calculator-1.onrender.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -------------------------------------------------
# Health Endpoint
# -------------------------------------------------

@app.get("/health")
def health():

    return {

        "status": "healthy",

        "application":
        "AI Property Price Predictor",

        "version":
        "1.0.0",

        "model":
        "Loaded"

    }


# -------------------------------------------------
# Model Info
# -------------------------------------------------

@app.get("/model-info")
def model_info():

    return {

        "algorithm":
        "XGBoost",

        "version":
        "1.0.0"

    }


# -------------------------------------------------
# Metrics Endpoint
# -------------------------------------------------

@app.get("/metrics")
def metrics():

    uptime = time.time() - monitoring.APP_START_TIME

    average = 0

    if monitoring.SUCCESSFUL_PREDICTIONS:

        average = (

            monitoring.TOTAL_RESPONSE_TIME

            /

            monitoring.SUCCESSFUL_PREDICTIONS

        )

    return {

        "uptime_seconds":
        round(uptime, 2),

        "total_requests":
        monitoring.TOTAL_REQUESTS,

        "successful_predictions":
        monitoring.SUCCESSFUL_PREDICTIONS,

        "failed_predictions":
        monitoring.FAILED_PREDICTIONS,

        "average_response_time_seconds":
        round(average, 4),

    }


# -------------------------------------------------
# Prediction Endpoint
# -------------------------------------------------

@app.post("/predict")
def predict(request: PropertyRequest):

    monitoring.TOTAL_REQUESTS += 1

    logger.info("-" * 60)
    logger.info("Prediction Request Received")

    logger.info(

        f"Payload : {request.model_dump()}"

    )

    start_time = time.time()

    try:

        result = predict_price(

            request.model_dump()

        )

        execution_time = (

            time.time()

            -

            start_time

        )

        monitoring.SUCCESSFUL_PREDICTIONS += 1

        monitoring.TOTAL_RESPONSE_TIME += execution_time

        logger.info(

            f"Prediction : {result['predicted_price_lakhs']} Lakhs"

        )

        logger.info(

            f"Execution Time : {execution_time:.4f} seconds"

        )

        logger.info("Prediction Completed")

        return result

    except Exception as e:

        monitoring.FAILED_PREDICTIONS += 1

        logger.exception(

            "Prediction Failed"

        )

        raise HTTPException(

            status_code=500,

            detail=str(e)

        )