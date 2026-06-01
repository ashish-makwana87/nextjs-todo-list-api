'use client'; 
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='p-6 text-center'>
      <h2 className='text-xl font-semibold'>
        Something went wrong!
      </h2>

      <p className='mt-2 text-sm'>
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className='mt-4 px-4 py-2 border rounded'
      >
        Try again
      </button>
    </div>
  );
}