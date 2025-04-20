import { NextRequest, NextResponse } from "next/server";
import { getPage } from "@/lib/notion";

export async function GET(
  request: NextRequest,
  context: { params: Record<string, string> } // ✅ safer match for RouteContext
) {
  const pageId = context.params.id;

  if (!pageId) {
    return NextResponse.json(
      { message: "Page ID is missing" },
      { status: 400 }
    );
  }

  try {
    const pageContent = await getPage(pageId);
    return NextResponse.json(pageContent, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
