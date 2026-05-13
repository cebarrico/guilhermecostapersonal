export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 900,
          color: "#fff",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        {children}
      </h2>
      <div
        style={{
          width: 60,
          height: 3,
          background: "#a3e635",
          margin: "0.6rem auto 0",
          borderRadius: 2,
          boxShadow: "0 0 10px rgba(163,230,53,0.5)",
        }}
      />
    </div>
  );
}
