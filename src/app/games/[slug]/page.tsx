'use client';
import { useParams } from 'next/navigation';

export default function Slug() {
  const params = useParams();

  return <div>Page game, avaiable at: localhost:3000/games/{params.slug}</div>;
}
