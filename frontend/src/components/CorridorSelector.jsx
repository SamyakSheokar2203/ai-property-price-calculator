export default function CorridorSelector({
  corridor,
  setCorridor,
}) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-8">

      <button
        onClick={() =>
          setCorridor("dehu_solapur")
        }
        className={`
          p-5
          rounded-2xl
          border
          text-left
          transition-all
          shadow-md

          ${
            corridor === "dehu_solapur"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          }
        `}
      >
        <div className="font-bold text-lg">
          Dehu → Solapur
        </div>

        <div className="text-sm opacity-80">
          Western Growth Corridor
        </div>
      </button>

      <button
        onClick={() =>
          setCorridor(
            "kolhapur_nashik"
          )
        }
        className={`
          p-5
          rounded-2xl
          border
          text-left
          transition-all
          shadow-md

          ${
            corridor ===
            "kolhapur_nashik"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          }
        `}
      >
        <div className="font-bold text-lg">
          Kolhapur → Nashik
        </div>

        <div className="text-sm opacity-80">
          Northern Expansion Corridor
        </div>
      </button>

    </div>
  );
}
