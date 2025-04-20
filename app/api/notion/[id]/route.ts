/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { getPage } from "@/lib/notion";

// DO NOT explicitly type the second argument
export async function GET(
  request: NextRequest,
  context: any // 👈 let Next.js handle it
) {
  const pageId = context?.params?.id;

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
