import { getTop5Anime } from "@/lib/myanimelist";
import { NextRequest, NextResponse } from "next/server";
// export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const response = await getTop5Anime();
  return NextResponse.json(response);
}
