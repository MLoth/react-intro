export default function Card({ title, children }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>

      <div className="card-actions">
        <button className="card-action">Download report</button>
        <button className="card-action">Pause task</button>
      </div>

      <div className="card-body">{children}</div>
    </div>
  );
}
