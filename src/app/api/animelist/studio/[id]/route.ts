import { searchAnimeByStudio } from "@/lib/myanimelist";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const url_param_status = params.id;

  const data = await searchAnimeByStudio(url_param_status);

  if (data) {
    return NextResponse.json(data);
  }

  return NextResponse.json({}); // Fix: Replace resresponseponse with a valid response object
}
