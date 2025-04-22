import { NextRequest, NextResponse } from "next/server";
import { getRowInfoById } from "@/lib/notion";

type Params = {
  params: Promise<{ id: string }>;
};

export async function GET(
  request: NextRequest,
  context: Params
): Promise<NextResponse> {
  const { id: rowId } = await context.params;

  if (!rowId) {
    return NextResponse.json({ message: "Missing row ID" }, { status: 400 });
  }

  try {
    const post = await getRowInfoById(rowId);

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error: unknown) {
    console.error("Error fetching Notion row:", error);

    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
