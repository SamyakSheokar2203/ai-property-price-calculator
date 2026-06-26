export default function PredictionCard({
  prediction,
}) {

  const lower =
    prediction
      ? (prediction * 0.95).toFixed(2)
      : 0;

  const upper =
    prediction
      ? (prediction * 1.05).toFixed(2)
      : 0;

  return (
    <div
      className="
      bg-gradient-to-br
      from-blue-600
      via-indigo-600
      to-purple-700
      rounded-3xl
      shadow-2xl
      p-8
      text-white
      min-h-[420px]
      flex
      flex-col
      justify-between
    "
    >

      <div>

        <p
          className="
          text-sm
          uppercase
          tracking-widest
          opacity-80
        "
        >
          Estimated Property Value
        </p>

        <h2
          className="
          text-6xl
          font-bold
          mt-6
        "
        >
          ₹ {prediction}
        </h2>

        <p className="mt-2 text-xl">
          Lakhs
        </p>

      </div>

      <div>

        <div
          className="
          bg-white/10
          rounded-2xl
          p-4
          mb-4
        "
        >
          <p className="text-sm">
            Estimated Range
          </p>

          <p
            className="
            text-2xl
            font-semibold
            mt-2
          "
          >
            ₹ {lower}L - ₹ {upper}L
          </p>
        </div>

        <div
          className="
          bg-white/10
          rounded-2xl
          p-4
        "
        >
          <p className="text-sm">
            Confidence Score
          </p>

          <p
            className="
            text-2xl
            font-semibold
            mt-2
          "
          >
            92%
          </p>
        </div>

      </div>

    </div>
  );
}
