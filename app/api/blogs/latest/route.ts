import { BLOG_POSTS } from "@/app/lib/blogs-data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = BLOG_POSTS.slice(0, 3);
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
