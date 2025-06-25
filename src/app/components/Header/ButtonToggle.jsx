"use client";

export const ButtonToggle = ({ isOpen, setIsOpen, color, style, className }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      style={{
        position: "relative",
        width: "30px",
        height: "24px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: 0,
        ...style,
      }}
      aria-label="Toggle menu"
      className={className}
    >
      {/* Línea 1 */}
      <span
        style={{
          position: "absolute",
          top: isOpen ? "10px" : "0px",
          left: 0,
          width: "100%",
          height: "4px",
          background: color,
          borderRadius: "2px",
          transition: "transform 0.3s ease, top 0.3s ease",
          transform: isOpen ? "rotate(45deg)" : "rotate(0)",
        }}
      />
      {/* Línea 2 */}
      <span
        style={{
          position: "absolute",
          top: "10px",
          left: 0,
          width: "100%",
          height: "4px",
          background: color,
          borderRadius: "2px",
          transition: "opacity 0.3s ease",
          opacity: isOpen ? 0 : 1,
        }}
      />
      {/* Línea 3 */}
      <span
        style={{
          position: "absolute",
          bottom: isOpen ? "10px" : "0px",
          left: 0,
          width: "100%",
          height: "4px",
          background: color,
          borderRadius: "2px",
          transition: "transform 0.3s ease, bottom 0.3s ease",
          transform: isOpen ? "rotate(-45deg)" : "rotate(0)",
        }}
      />
    </button>
  );
};
