import joblib
import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = BASE_DIR / "model" / "property_model.pkl"
FEATURE_PATH = BASE_DIR / "model" / "feature_columns.pkl"

model = joblib.load(MODEL_PATH)
feature_columns = joblib.load(FEATURE_PATH)


def predict_price(data):

    amenities = data.get("amenities", [])

    row = {
        "bhk": data["bhk"],
        "carpet_area": data["carpet_area"],
        "bathrooms": data["bathrooms"],
        "floor": data["floor"],
        "gym": 1 if "gym" in amenities else 0,
        "parking": 1 if "parking" in amenities else 0,
        "security": 1 if "security" in amenities else 0,
        "lift": 1 if "lift" in amenities else 0,
        "clubhouse": 1 if "clubhouse" in amenities else 0,
        "swimming_pool": 1 if "swimming_pool" in amenities else 0,
        "garden": 1 if "garden" in amenities else 0,
        "corridor_kolhapur_nashik": (
            1
            if data["corridor"] == "kolhapur_nashik"
            else 0
        ),
    }

    df = pd.DataFrame([row])

    df = df.reindex(
        columns=feature_columns,
        fill_value=0
    )

    prediction = model.predict(df)[0]

    return {
        "predicted_price_lakhs": round(
            float(prediction),
            2
        )
    }