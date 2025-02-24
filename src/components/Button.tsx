'use client';

import { CircleNotch } from '@phosphor-icons/react';
import { useFormStatus } from 'react-dom';

export function Button(
  props: Readonly<React.ButtonHTMLAttributes<HTMLButtonElement>>,
) {
  //
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-gray-950  rounded w-24 h-10  hover:border disabled:bg-gray-800 flex items-center justify-center gap-2"
      disabled={pending}
      {...props}
    >
      {!pending && props.children}
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
