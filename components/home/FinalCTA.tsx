import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function FinalCTA() {
  return (
    <section id="contact" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
      
      <ScrollReveal className="relative z-10 max-w-4xl mx-auto text-center space-y-10 py-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Let's Build Something That Matters
        </h2>
        <p className="text-white/80 text-xl leading-relaxed">
          Whether you need strategy, visibility, partnerships, or execution support, Master of Strategies can help you design the right approach and deliver meaningful outcomes.
        </p>
        <p className="text-white/60 font-medium">
          If you are looking for a strategy partner instead of just a service provider, let’s start a conversation.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="mailto:mos@masterofstrategies.com?subject=Consultation%20Request" className="bg-white text-primary px-10 py-4 rounded-md font-bold text-lg hover:bg-slate-50 transition-all shadow-xl">
            Request Consultation
          </Link>
          <Link href="/contact" className="border-2 border-white/30 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-all">
            Contact Our Team
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
