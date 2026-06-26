import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function ComparisonChart({
  prediction,
}) {

  const data = [
    {
      corridor:
        "Dehu-Solapur",
      price: 101,
    },
    {
      corridor:
        "Kolhapur-Nashik",
      price: 123,
    },
    {
      corridor:
        "Current",
      price:
        Number(prediction),
    },
  ];

  const colors = [
    "#3B82F6",
    "#8B5CF6",
    "#10B981",
  ];

  return (
    <div
      className="
      bg-white
      dark:bg-slate-800
      p-8
      rounded-3xl
      shadow-xl
    "
    >

      <h2
        className="
        text-xl
        font-bold
        mb-6
      "
      >
        Corridor Comparison
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <BarChart data={data}>

          <XAxis
            dataKey="corridor"
          />

          <YAxis />

          <Tooltip />

          <Bar dataKey="price">

            {data.map(
              (entry, index) => (
                <Cell
                  key={index}
                  fill={
                    colors[index]
                  }
                />
              )
            )}

          </Bar>

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}
