import { getStudio } from "@/lib/myanimelist";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const url_param_status = params.id;

  if (url_param_status) {
    const response = await getStudio(url_param_status);
    return NextResponse.json(response);
  }

  return NextResponse.json({}); // Fix: Replace resresponseponse with a valid response object
}
