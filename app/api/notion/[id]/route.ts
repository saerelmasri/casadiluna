import { NextRequest, NextResponse } from "next/server";
import { getPage } from "@/lib/notion";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params; // Await required

  if (!id) {
    return NextResponse.json(
      { message: "Page ID is missing" },
      { status: 400 }
    );
  }

  try {
    const pageContent = await getPage(id);
    return NextResponse.json(pageContent, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
};
