import BlogForm from "@/components/admin/BlogForm";

export default function NewBlogPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-ink">Create New Blog</h1>
          <p className="text-secondary mt-1">Fill out the details below to publish a new insight.</p>
        </div>
        
        <BlogForm />
      </div>
    </div>
  );
}
