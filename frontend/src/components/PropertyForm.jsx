import { useState } from "react";
import toast from "react-hot-toast";

import AmenitiesSelector from "./AmenitiesSelector";
import { predictPrice } from "../api/propertyApi";

export default function PropertyForm({
  corridor,
  setPrediction,
}) {
  const [loading, setLoading] =
    useState(false);

  const [selectedAmenities,
    setSelectedAmenities] = useState([]);

  const [formData,
    setFormData] = useState({
      bhk: 2,
      carpet_area: 1000,
      bathrooms: 2,
      floor: 5,
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        Number(e.target.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const payload = {
        corridor,
        ...formData,
        amenities:
          selectedAmenities.map(
            (a) => a.value
          ),
      };

      const result =
        await predictPrice(payload);

      setPrediction(
        result.predicted_price_lakhs
      );

      toast.success(
        "Prediction generated successfully"
      );

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to generate prediction"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
      bg-white
      dark:bg-slate-800
      rounded-3xl
      shadow-xl
      p-8
      space-y-5
    "
    >
      <h2 className="text-2xl font-bold">
        Property Details
      </h2>

      <div>
        <label className="font-medium">
          BHK
        </label>

        <input
          type="number"
          name="bhk"
          value={formData.bhk}
          onChange={handleChange}
          className="
          w-full
          border
          rounded-xl
          p-3
          mt-2
        "
        />
      </div>

      <div>
        <label className="font-medium">
          Carpet Area (Sq Ft)
        </label>

        <input
          type="number"
          name="carpet_area"
          value={
            formData.carpet_area
          }
          onChange={handleChange}
          className="
          w-full
          border
          rounded-xl
          p-3
          mt-2
        "
        />
      </div>

      <div>
        <label className="font-medium">
          Bathrooms
        </label>

        <input
          type="number"
          name="bathrooms"
          value={
            formData.bathrooms
          }
          onChange={handleChange}
          className="
          w-full
          border
          rounded-xl
          p-3
          mt-2
        "
        />
      </div>

      <div>
        <label className="font-medium">
          Floor
        </label>

        <input
          type="number"
          name="floor"
          value={formData.floor}
          onChange={handleChange}
          className="
          w-full
          border
          rounded-xl
          p-3
          mt-2
        "
        />
      </div>

      <AmenitiesSelector
        selectedAmenities={
          selectedAmenities
        }
        setSelectedAmenities={
          setSelectedAmenities
        }
      />

      <button
        type="submit"
        disabled={loading}
        className="
        w-full
        bg-blue-600
        hover:bg-blue-700
        text-white
        py-3
        rounded-xl
        font-semibold
        transition
      "
      >
        {loading
          ? "Predicting..."
          : "Predict Property Price"}
      </button>

    </form>
  );
}
