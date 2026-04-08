import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function EventPositioning() {
  const points = [
    "Position as thought leaders",
    "Engage key stakeholders",
    "Build partnerships",
    "Strengthen credibility",
    "Create ecosystem presence"
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal animation="scale" delay={200} className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10">
          <Image 
            src="/images/events.png" 
            alt="Strategic Events" 
            fill 
            className="object-cover" 
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"></div>
        </ScrollReveal>
        <ScrollReveal delay={200} className="order-1 lg:order-2 space-y-8">
          <h2 className="text-4xl font-bold leading-tight">Building Platforms That Create Influence</h2>
          <p className="text-lg text-secondary leading-relaxed">
            Today, events are no longer just gatherings — they are strategic platforms for visibility, partnerships, and institutional positioning. Master of Strategies specializes in designing conferences and convenings that create real outcomes.
          </p>
          <div className="space-y-4">
            <h4 className="font-bold text-primary">We help organizations:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {points.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-secondary italic border-l-4 border-accent pl-4 py-2 bg-slate-50">
            From closed-door leadership roundtables to large conferences, we bring strategy and structure to every engagement.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
