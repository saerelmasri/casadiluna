/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export type BlogPostType = {
  id: string;
  title: string;
  category: string;
  description: string;
  readingTime: number;
  cover: string;
  date: string;
  createdTime: string;
};

export async function getDatabase(databaseId: string): Promise<BlogPostType[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const rows = response.results.map((page: any) => {
    return {
      id: page.id,
      title: page.properties.Article.title[0]?.text.content || "",
      category: page.properties.Category.rich_text[0]?.text.content || "",
      description: page.properties.Description.rich_text[0]?.text.content || "",
      readingTime: page.properties.ReadingTime.number || 0,
      cover: page.properties.Cover.files?.[0]?.file?.url || "",
      date: page.properties.Date.date?.start || "",
      createdTime: page.properties["Created time"].created_time || "",
    };
  });

  return rows;
}
