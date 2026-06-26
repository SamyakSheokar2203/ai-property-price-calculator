import {
  IndianRupee,
  Building2,
  MapPinned,
  Ruler,
} from "lucide-react";

export default function KPICards({
  prediction,
  carpetArea,
  corridor,
}) {

  const pricePerSqFt =
    prediction && carpetArea
      ? (
          (prediction * 100000) /
          carpetArea
        ).toFixed(0)
      : 0;

  const cards = [
    {
      title: "Property Value",
      value: `₹ ${prediction}`,
      icon: <IndianRupee />,
    },
    {
      title: "Area",
      value: `${carpetArea} SqFt`,
      icon: <Ruler />,
    },
    {
      title: "Price/SqFt",
      value: `₹ ${pricePerSqFt}`,
      icon: <Building2 />,
    },
    {
      title: "Corridor",
      value:
        corridor ===
        "dehu_solapur"
          ? "Dehu-Solapur"
          : "Kolhapur-Nashik",
      icon: <MapPinned />,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-8">

      {cards.map((card) => (

        <div
          key={card.title}
          className="
            bg-white
            dark:bg-slate-800
            rounded-2xl
            shadow-lg
            p-5
          "
        >

          <div className="flex justify-between text-blue-600">
            {card.icon}
          </div>

          <div
            className="
            mt-4
            text-sm
            text-gray-500
            dark:text-gray-300
          "
          >
            {card.title}
          </div>

          <div
            className="
            text-xl
            font-bold
            mt-1
            text-slate-900
            dark:text-white
          "
          >
            {card.value}
          </div>

        </div>

      ))}

    </div>
  );
}
