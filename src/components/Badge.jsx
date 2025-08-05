export default function Badge({ children, className}) {
  return (
    <div className={`badge ${className != null ? className : ""}`}>
      <p>{children}</p>
    </div>
  );
}
