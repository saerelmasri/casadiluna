import { NextRequest, NextResponse } from "next/server";
import { getPage } from "@/lib/notion";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const pageId = params.id;

    if (!pageId) {
      return NextResponse.json(
        { message: "Page ID is missing" },
        { status: 400 }
      );
    }

    const pageContent = await getPage(pageId);
    return NextResponse.json(pageContent, { status: 200 });
  } catch (error) {
    console.error("Error fetching Notion page:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
