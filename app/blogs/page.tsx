import { BLOG_POSTS } from "@/app/lib/blogs-data";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default async function BlogsPage() {
  const posts = BLOG_POSTS;

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-20 text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-5xl md:text-6xl font-black text-ink leading-tight">
            Insights & <span className="text-primary italic">Perspectives</span>
          </h1>
          <p className="text-xl text-secondary">
            Exploring the intersection of modern strategy, operational excellence, and transformative growth.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <ScrollReveal key={post.id} delay={idx * 100} animation="fade-in-up" className="group">
              <Link href={`/blogs/${post.slug}`} className="cursor-pointer block space-y-6">
                <div className="aspect-[16/10] bg-slate-100 rounded-3xl overflow-hidden relative border border-primary/5 shadow-2xl shadow-primary/5">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                      <span className="text-primary/20 font-black text-4xl opacity-20 hover:opacity-100 transition-opacity">MOS</span>
                    </div>
                  )}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-accent text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-accent/10">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 px-2">
                  <div className="flex items-center gap-3 text-xs font-bold text-secondary uppercase tracking-tight">
                    <span>{post.author}</span>
                    <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                    <span>{new Date(post.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-ink leading-tight group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-secondary line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt || post.content.substring(0, 150) + "..."}
                  </p>
                  <div className="pt-4 flex items-center text-primary font-bold text-sm tracking-tight group-hover:gap-2 transition-all">
                    Read Article <span className="ml-1">→</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
          {posts.length === 0 && (
            <div className="col-span-full py-32 text-center space-y-4">
              <div className="text-6xl grayscale opacity-20">✍️</div>
              <p className="text-secondary font-medium">We're currently drafting new insights. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
