import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
import { deletePost } from "@/app/lib/actions";

export default async function AdminBlogsPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-slate-50/50 p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-ink">Blog Management</h1>
            <p className="text-secondary mt-1">Manage your website insights and articles</p>
          </div>
          <Link
            href="/admin/blogs/new"
            className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark hover:-translate-y-0.5 transition-all"
          >
            + Create New Blog
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Title</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Category</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Date</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="font-bold text-ink group-hover:text-primary transition-colors">{post.title}</div>
                    <div className="text-xs text-secondary mt-1">/{post.slug}</div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-secondary">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-5 text-right space-x-3">
                    <Link
                      href={`/admin/blogs/edit/${post.id}`}
                      className="text-sm font-bold text-primary hover:underline"
                    >
                      Edit
                    </Link>
                    <form action={async () => { "use server"; await deletePost(post.id); }} className="inline">
                      <button
                        type="submit"
                        className="text-sm font-bold text-rose-500 hover:text-rose-700 hover:underline"
                      >
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-20 text-center text-secondary">
                    No blogs found. Start by creating your first post!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
