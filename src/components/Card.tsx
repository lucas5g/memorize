export function Card({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-gray-900 p-2 rounded">
      <div className="card-body">{children}</div>
    </div>
  );
}