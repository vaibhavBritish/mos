"use client";

import { createPost, updatePost, deletePost } from "@/app/lib/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogForm({ post }: { post?: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    try {
      if (post) {
        await updatePost(post.id, formData);
      } else {
        await createPost(formData);
      }
      router.push("/admin/blogs");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-6 max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl border border-primary/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-ink/70 ml-1">Title</label>
          <input
            name="title"
            defaultValue={post?.title}
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="Enter blog title"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-ink/70 ml-1">Slug</label>
          <input
            name="slug"
            defaultValue={post?.slug}
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="blog-post-url"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-ink/70 ml-1">Excerpt (Short Summary)</label>
        <textarea
          name="excerpt"
          defaultValue={post?.excerpt}
          rows={2}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          placeholder="Brief description of the post..."
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-ink/70 ml-1">Content (Markdown supported)</label>
        <textarea
          name="content"
          defaultValue={post?.content}
          required
          rows={12}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-mono text-sm"
          placeholder="Write your content here..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-ink/70 ml-1">Category</label>
          <input
            name="category"
            defaultValue={post?.category || "Insights"}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-ink/70 ml-1">Author</label>
          <input
            name="author"
            defaultValue={post?.author || "Admin"}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-ink/70 ml-1">Image URL</label>
          <input
            name="image"
            defaultValue={post?.image}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="https://example.com/image.jpg"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark hover:-translate-y-0.5 transition-all disabled:opacity-50"
        >
          {loading ? "Saving..." : post ? "Update Post" : "Create Post"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-8 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
