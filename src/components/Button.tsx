'use client';

import { CircleNotch } from '@phosphor-icons/react';
import { useFormStatus } from 'react-dom';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button(props: Readonly<Props>) {
  //
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-indigo-900  rounded w-24 h-10 hover:bg-indigo-800 hover:border-blue-700 disabled:bg-blue-800 flex items-center justify-center gap-2"
      disabled={pending}
      {...props}
    >
      {!pending && props.label}
      {pending && (
        <CircleNotch
          size={22}
          color="white"
          className="animate-spin text-cent"
        />
      )}
    </button>
  );
}
