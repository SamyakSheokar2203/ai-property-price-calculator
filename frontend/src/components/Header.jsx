import { Building2 } from "lucide-react";

export default function Header() {
  return (
    <div className="text-center mb-10">

      <div className="flex justify-center mb-4">
        <Building2 size={48} />
      </div>

      <h1 className="text-5xl font-bold">
        AI Property Price Predictor
      </h1>

      <p className="text-gray-500 mt-4">
        Pune Residential Corridor Analysis
      </p>

    </div>
  );
}
