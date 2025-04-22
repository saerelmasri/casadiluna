import { NextRequest, NextResponse } from "next/server";
import { getPage } from "@/lib/notion";

type Params = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, context: Params) {
  const { id: pageId } = await context.params;

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
    console.error("Error fetching Notion page:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
