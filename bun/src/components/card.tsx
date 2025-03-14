import React from "react";

export function Card({ children }: Readonly<React.PropsWithChildren>) {
  return <div className="bg-gray-600 rounded p-4">{children}</div>;
}