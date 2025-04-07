import { NextResponse } from "next/server";
import { BlogPostType, getDatabase } from "@/lib/notion";

export async function GET() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    if (!databaseId) {
      return NextResponse.json(
        { message: "Database ID is missing" },
        { status: 500 }
      );
    }

    const posts: BlogPostType[] = await getDatabase(databaseId);
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
