import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function Differentiation() {
  const points = [
    { t: "Strategy First Approach", d: "Every engagement begins with research, analysis, and structured thinking." },
    { t: "Execution Capability", d: "We don’t just recommend solutions — we help implement them." },
    { t: "Network Advantage", d: "Our ecosystem access helps organizations connect with the right stakeholders." },
    { t: "Business Outcome Focus", d: "Our work is designed to deliver measurable results, not just activity." },
    { t: "Integrated Approach", d: "We combine consulting, communication, and execution under one framework." }
  ];

  return (
    <section className="bg-ink text-white overflow-hidden">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal animation="fade-in-left" className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Master of Strategies</h2>
            <div className="space-y-12">
              {points.map((item, idx) => (
                <div key={idx} className="flex gap-6 group/item">
                  <div className="text-accent font-bold text-xl transition-transform group-hover/item:scale-110 duration-300">0{idx + 1}</div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold">{item.t}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-in-right" className="relative aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <Image 
              src="/images/hero.png" 
              alt="Differentiation" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-50" 
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
