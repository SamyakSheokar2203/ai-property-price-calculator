# TODO: train XGBoost model and save pkl
import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error
from xgboost import XGBRegressor

# Load Dataset

df = pd.read_csv("property_data.csv")

print("Dataset Loaded")
print(df.shape)

# Convert Corridor to Numeric

df = pd.get_dummies(
    df,
    columns=["corridor"],
    drop_first=True
)

# Features

X = df.drop(
    columns=["price_lakhs"]
)

# Target

y = df["price_lakhs"]

# Save Feature Order

joblib.dump(
    X.columns.tolist(),
    "feature_columns.pkl"
)

# Train/Test Split

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Model

model = XGBRegressor(
    n_estimators=200,
    max_depth=5,
    learning_rate=0.05,
    random_state=42
)

print("\nTraining Model...")

model.fit(
    X_train,
    y_train
)

# Prediction

predictions = model.predict(X_test)

mae = mean_absolute_error(
    y_test,
    predictions
)

print(
    f"\nMean Absolute Error: {mae:.2f} Lakhs"
)

# Save Model

joblib.dump(
    model,
    "property_model.pkl"
)

print("\nModel Saved Successfully")

print(
    "\nGenerated Files:"
)

print(
    "property_model.pkl"
)

print(
    "feature_columns.pkl"
)