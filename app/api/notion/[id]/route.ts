import { NextRequest, NextResponse } from "next/server";
import { getPage } from "@/lib/notion";

type RouteParams = {
  params: {
    id: string;
  };
};

export const GET = async (
  request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> => {
  const { id } = params;

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
    console.error("Error fetching Notion page:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
