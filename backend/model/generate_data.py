# TODO: generate synthetic Pune property dataset
import pandas as pd
import numpy as np

np.random.seed(42)

records = []

for _ in range(10000):

    corridor = np.random.choice(
        [
            "dehu_solapur",
            "kolhapur_nashik"
        ]
    )

    bhk = np.random.randint(1, 5)

    carpet_area = np.random.randint(
        400,
        2500
    )

    bathrooms = min(
        bhk + np.random.randint(0, 2),
        5
    )

    floor = np.random.randint(
        1,
        31
    )

    gym = np.random.randint(0, 2)

    parking = np.random.randint(0, 2)

    security = np.random.randint(0, 2)

    lift = np.random.randint(0, 2)

    clubhouse = np.random.randint(0, 2)

    swimming_pool = np.random.randint(0, 2)

    garden = np.random.randint(0, 2)

    # Property Pricing Logic

    base_price = carpet_area * 0.08

    bhk_price = bhk * 8

    bathroom_price = bathrooms * 2

    floor_price = floor * 0.3

    amenities_score = (
        gym +
        parking +
        security +
        lift +
        clubhouse +
        swimming_pool +
        garden
    )

    amenities_price = amenities_score * 2.5

    corridor_multiplier = (
        1.15
        if corridor == "kolhapur_nashik"
        else 1.0
    )

    price = (
        base_price +
        bhk_price +
        bathroom_price +
        floor_price +
        amenities_price
    )

    price *= corridor_multiplier

    noise = np.random.normal(0, 5)

    final_price = round(
        price + noise,
        2
    )

    records.append(
        [
            corridor,
            bhk,
            carpet_area,
            bathrooms,
            floor,
            gym,
            parking,
            security,
            lift,
            clubhouse,
            swimming_pool,
            garden,
            final_price
        ]
    )

columns = [
    "corridor",
    "bhk",
    "carpet_area",
    "bathrooms",
    "floor",
    "gym",
    "parking",
    "security",
    "lift",
    "clubhouse",
    "swimming_pool",
    "garden",
    "price_lakhs"
]

df = pd.DataFrame(
    records,
    columns=columns
)

df.to_csv(
    "property_data.csv",
    index=False
)

print("\nDataset Created Successfully")
print(f"Total Records: {len(df)}")
print(df.head())