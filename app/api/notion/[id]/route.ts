import { NextRequest, NextResponse } from "next/server";
import { getPage } from "@/lib/notion";

export async function GET(
  request: NextRequest,
  { params }: { params: { [key: string]: string | string[] } }
) {
  const { id } = params;

  if (!id || Array.isArray(id)) {
    return NextResponse.json(
      { message: "Page ID is missing or invalid" },
      { status: 400 }
    );
  }

  try {
    const pageContent = await getPage(id);
    return NextResponse.json(pageContent, { status: 200 });
  } catch (error) {
    console.error("Error fetching Notion page:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
