"use server";

import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const content = formData.get("content") as string;
  const excerpt = formData.get("excerpt") as string;
  const author = formData.get("author") as string;
  const category = formData.get("category") as string;
  const image = formData.get("image") as string;

  await prisma.post.create({
    data: {
      title,
      slug,
      content,
      excerpt,
      author,
      category,
      image,
      published: true, // Defaulting to true for now
    },
  });

  revalidatePath("/blogs");
  revalidatePath("/admin/blogs");
}

export async function updatePost(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const content = formData.get("content") as string;
  const excerpt = formData.get("excerpt") as string;
  const author = formData.get("author") as string;
  const category = formData.get("category") as string;
  const image = formData.get("image") as string;

  await prisma.post.update({
    where: { id },
    data: {
      title,
      slug,
      content,
      excerpt,
      author,
      category,
      image,
    },
  });

  revalidatePath("/blogs");
  revalidatePath(`/blogs/${slug}`);
  revalidatePath("/admin/blogs");
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: { id },
  });

  revalidatePath("/blogs");
  revalidatePath("/admin/blogs");
}
