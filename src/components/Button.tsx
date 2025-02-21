'use client'

import { useFormStatus } from "react-dom";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}



export function Button(props: Readonly<Props>) {
  // 
  const { pending } = useFormStatus()

  return (
    <button
      // onClick={async () => action()}
      className="bg-blue-900 p-2 rounded w-24 hover:bg-blue-800 hover:border-blue-700"
      {...props}
    >
      {pending
        ? 'Carregando...'
        // : props.label?
        : 'Carregando'
      }
    </button >

  );
}