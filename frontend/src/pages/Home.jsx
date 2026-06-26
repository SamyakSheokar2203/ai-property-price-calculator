import { useState, useEffect } from "react";

import Header from "../components/Header";
import CorridorSelector from "../components/CorridorSelector";
import PropertyForm from "../components/PropertyForm";
import PredictionCard from "../components/PredictionCard";
import ComparisonChart from "../components/ComparisonChart";
import KPICards from "../components/KPICards";

export default function Home() {

  const [corridor, setCorridor] =
    useState("dehu_solapur");

  const [prediction, setPrediction] =
    useState(0);

  const [darkMode, setDarkMode] =
    useState(false);

  const [carpetArea, setCarpetArea] =
    useState(1000);

  useEffect(() => {

    const html =
      document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

  }, [darkMode]);

  return (
    <div
      className="
      min-h-screen
      bg-slate-100
      dark:bg-slate-950
      text-slate-900
      dark:text-white
      p-10
      transition-all
      duration-300
    "
    >

      <button
        onClick={() =>
          setDarkMode(!darkMode)
        }
        className="
        fixed
        top-5
        right-5
        bg-white
        dark:bg-slate-800
        px-4
        py-2
        rounded-xl
        shadow-lg
      "
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <div className="max-w-7xl mx-auto">

        <Header />

        <KPICards
          prediction={prediction}
          carpetArea={carpetArea}
          corridor={corridor}
        />

        <CorridorSelector
          corridor={corridor}
          setCorridor={setCorridor}
        />

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          mb-10
        "
        >

          <PropertyForm
            corridor={corridor}
            setPrediction={setPrediction}
            setCarpetArea={setCarpetArea}
          />

          <PredictionCard
            prediction={prediction}
          />

        </div>

        <ComparisonChart
          prediction={prediction}
        />

      </div>

    </div>
  );
}
