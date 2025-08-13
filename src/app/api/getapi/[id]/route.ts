import { NextResponse } from 'next/server';

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  return fetch(`http://localhost:3000/api/getapi/${params.id}`)
    .then(res => res.json())
    .then(data => NextResponse.json(data));
}
