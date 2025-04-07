/* eslint-disable @typescript-eslint/ban-ts-comment */
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

export async function getRowInfoById(rowId: string): Promise<{
  id: string;
  title: any;
  category: any;
  readingTime: any;
  cover: any;
  date: any;
} | null> {
  const page = await notion.pages.retrieve({
    page_id: rowId,
  });

  if (!page) return null;

  const properties = (page as any).properties;
  return {
    id: page.id,
    title: properties.Article?.title?.[0]?.text?.content || "",
    category: properties.Category?.rich_text?.[0]?.text?.content || "",
    readingTime: properties.ReadingTime?.number || 0,
    cover: properties.Cover?.files?.[0]?.file?.url || "",
    date: properties.Date?.date?.start || "",
  };
}

export async function getPage(pageId: string) {
  try {
    const blocks = await getBlockChildren(pageId);
    return { results: blocks };
  } catch (error) {
    console.error("Error fetching Notion page content:", error);
    throw new Error("Failed to fetch Notion page content");
  }
}

async function getBlockChildren(blockId: string): Promise<any> {
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });

  const blocksWithChildren = await Promise.all(
    response.results.map(async (block) => {
      // @ts-ignore
      if (block.has_children) {
        const children = await getBlockChildren(block.id);
        return { ...block, children };
      }
      return block;
    })
  );

  return blocksWithChildren;
}
