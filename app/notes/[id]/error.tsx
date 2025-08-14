'use client';

import type { ErrorProps } from '@/app/notes/error';

export default function Error({ error }: ErrorProps) {
  return <p>Could not fetch note details. {error.message}</p>;
}
