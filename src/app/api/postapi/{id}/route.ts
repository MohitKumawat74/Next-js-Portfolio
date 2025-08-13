import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const body = await req.json();
  return NextResponse.json (
    {
      message: 'Post created successfully',      
      data: body,
    },
    { status: 201 }
  );
}   