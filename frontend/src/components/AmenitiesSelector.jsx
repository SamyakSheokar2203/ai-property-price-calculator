import Select from "react-select";

const amenities = [
  { value: "parking", label: "Parking" },
  { value: "gym", label: "Gym" },
  { value: "security", label: "Security" },
  { value: "swimming_pool", label: "Swimming Pool" },
  { value: "garden", label: "Garden" },
];

export default function AmenitiesSelector({
  selectedAmenities,
  setSelectedAmenities,
}) {

  const isDark =
    document.documentElement.classList.contains(
      "dark"
    );

  return (
    <div>
      <label className="block mb-2 font-medium">
        Amenities
      </label>

      <Select
        isMulti
        options={amenities}
        value={selectedAmenities}
        onChange={setSelectedAmenities}
        placeholder="Select Amenities"

        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: isDark
              ? "#1e293b"
              : "#ffffff",

            borderColor: isDark
              ? "#475569"
              : "#d1d5db",

            color: isDark
              ? "#ffffff"
              : "#111827",
          }),

          menu: (base) => ({
            ...base,
            backgroundColor: isDark
              ? "#1e293b"
              : "#ffffff",
          }),

          option: (
            base,
            state
          ) => ({
            ...base,

            backgroundColor:
              state.isFocused
                ? isDark
                  ? "#334155"
                  : "#f3f4f6"
                : isDark
                ? "#1e293b"
                : "#ffffff",

            color: isDark
              ? "#ffffff"
              : "#111827",
          }),

          multiValue: (base) => ({
            ...base,

            backgroundColor:
              isDark
                ? "#475569"
                : "#e5e7eb",
          }),

          multiValueLabel: (
            base
          ) => ({
            ...base,

            color: isDark
              ? "#ffffff"
              : "#111827",
          }),

          input: (base) => ({
            ...base,

            color: isDark
              ? "#ffffff"
              : "#111827",
          }),

          singleValue: (
            base
          ) => ({
            ...base,

            color: isDark
              ? "#ffffff"
              : "#111827",
          }),

          placeholder: (
            base
          ) => ({
            ...base,

            color: isDark
              ? "#cbd5e1"
              : "#6b7280",
          }),
        }}
      />
    </div>
  );
}
