import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function InsightsPreview() {
  const posts = [
    { t: "Why Strategy Fails Without Execution", c: "Strategy" },
    { t: "The Rise of Leadership Convenings", c: "Events" },
    { t: "Building Influence Through Events", c: "Positioning" }
  ];

  return (
    <section id="blog" className="section-padding bg-white overflow-hidden">
      <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-4xl font-bold">Insights & Perspectives</h2>
          <p className="text-secondary">
            We believe strong organizations are built on strong thinking. Our insights section shares perspectives on strategy, governance, and leadership.
          </p>
        </div>
        <Link href="#" className="btn-secondary whitespace-nowrap">Read Insights</Link>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <ScrollReveal key={idx} delay={idx * 200} animation="fade-in-up" className="space-y-4 group cursor-pointer">
            <div className="aspect-[16/10] bg-slate-100 rounded-xl overflow-hidden relative">
               <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{post.c}</span>
              <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{post.t}</h4>
              <p className="text-sm text-secondary">Exploring the critical intersection of structured thinking and real-world outcomes...</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
