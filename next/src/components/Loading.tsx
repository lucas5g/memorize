'use client';
import { CircleNotch } from '@phosphor-icons/react';

export function LoadingUI() {
  return (
    <div className='flex items-center justify-center h-[80vh]'>
      <CircleNotch className='animate-spin' size={60} color='white' />
    </div>
  );
}
