// src/app/api/getapi/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // Example: proxy JSON server
  const r = await fetch("http://localhost:5000/posts", { cache: "no-store" });
  const data = await r.json();
  // Ensure array:
  const list = Array.isArray(data) ? data : (data?.posts ?? []);
  return NextResponse.json(list);
}
