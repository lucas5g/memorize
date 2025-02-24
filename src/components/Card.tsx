export function Card({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-gray-900 p-5 border border-gray-500 w-full rounded">
      {children}
    </div>
  );
}
