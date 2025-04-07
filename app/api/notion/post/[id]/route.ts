/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { getRowInfoById } from "@/lib/notion";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const rowId = params?.id;

  if (!rowId) {
    return NextResponse.json({ message: "Missing row ID" }, { status: 400 });
  }

  try {
    const post = await getRowInfoById(rowId);

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error: any) {
    console.log("Error fetching Notion page:", error);
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
