import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-40 pb-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal className="space-y-8 mb-16">
          <Link href="/blogs" className="text-sm font-bold text-secondary hover:text-primary transition-colors flex items-center gap-2 mb-10">
            ← Back to Insights
          </Link>
          
          <div className="space-y-6">
            <span className="bg-primary/5 text-primary text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border border-primary/10">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-ink leading-[1.1]">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-secondary font-bold text-sm pt-4 border-t border-slate-100">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-primary font-black">
                {post.author.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-ink">{post.author}</span>
                <span className="text-xs font-medium opacity-60">
                  {new Date(post.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} className="mb-16">
          <div className="aspect-[2/1] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 border border-primary/5">
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                 <div className="text-8xl opacity-10 font-black text-primary italic">MOS</div>
              </div>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400} className="prose prose-xl prose-slate max-w-none">
          {post.content.split("\n").map((para, i) => (
            para.trim() ? <p key={i} className="text-xl text-ink/80 leading-relaxed mb-8">{para}</p> : <br key={i} />
          ))}
        </ScrollReveal>
        
        <ScrollReveal delay={600} className="mt-24 pt-16 border-t border-slate-100">
          <div className="bg-primary/5 p-12 rounded-[2.5rem] border border-primary/10 text-center space-y-6">
            <h3 className="text-3xl font-black text-ink">Want more insights?</h3>
            <p className="text-secondary max-w-lg mx-auto">Join our strategic network to receive curated executive perspectives directly in your inbox.</p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Work email address" 
                className="px-8 py-4 rounded-xl border border-slate-200 focus:border-primary outline-none text-ink bg-white shadow-sm w-full max-w-xs" 
              />
              <button className="bg-primary text-white px-10 py-4 rounded-xl font-black shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
