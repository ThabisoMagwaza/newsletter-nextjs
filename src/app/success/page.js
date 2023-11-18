'use client';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const params = useSearchParams();

  const email = params.get('email');

  return <h1>Thank you for subscribing {email}</h1>;
}
