{/* Details */}
<div
  style={{
    position: "absolute",
    bottom: 18,
    left: 18,
    right: 18,
    color: "#fff",
  }}
>
  <p
    style={{
      fontSize: 14,
      opacity: 0.9,
      marginBottom: 10,
      lineHeight: 1.5,
    }}
  >
    {DESCRIPTIONS[activeService][i % 6]}
  </p>

  <span
    onClick={() => {
      setActiveIndex(i);
      setSelectedDesc(DESCRIPTIONS[activeService][i % 6]);
    }}
    style={{
      color: "#d4af37",
      fontWeight: 600,
      cursor: "pointer",
      fontSize: 14,
    }}
  >
    Read More →
  </span>
</div>
