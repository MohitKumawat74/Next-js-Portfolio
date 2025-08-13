
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = await fetch(`http://localhost:3000/api/getapi/${params.id}`);
  const data = await res.json();
  return NextResponse.json(data);
}
