export default function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#a3e635", fontSize: "0.75rem" }}>
          ★
        </span>
      ))}
    </div>
  );
}
