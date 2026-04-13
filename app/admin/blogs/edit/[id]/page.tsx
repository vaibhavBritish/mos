import { prisma } from "@/app/lib/prisma";
import BlogForm from "@/components/admin/BlogForm";
import { notFound } from "next/navigation";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50/50 p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-ink">Edit Blog Post</h1>
          <p className="text-secondary mt-1">Update the content and metadata for "{post.title}".</p>
        </div>
        
        <BlogForm post={post} />
      </div>
    </div>
  );
}
