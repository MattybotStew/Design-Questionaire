export default function Question({ question, selected, onSelect }) {
  return (
    <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
      <legend
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          padding: 0,
          marginBottom: "1.25rem",
        }}
      >
        {question.prompt}
      </legend>
      <div style={{ display: "grid", gap: "0.75rem" }}>
        {question.options.map((option) => {
          const isSelected = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              aria-pressed={isSelected}
              style={{
                textAlign: "left",
                padding: "0.9rem 1.1rem",
                borderRadius: "10px",
                border: `1px solid ${isSelected ? "#111" : "#ddd"}`,
                background: isSelected ? "#111" : "#fff",
                color: isSelected ? "#fff" : "#111",
                transition: "all 0.15s ease",
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
