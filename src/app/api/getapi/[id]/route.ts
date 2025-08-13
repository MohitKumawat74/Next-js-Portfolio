
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/getapi/${id}`);
  const data = await res.json();
  return NextResponse.json(data);
}
