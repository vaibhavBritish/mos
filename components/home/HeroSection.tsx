import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ScrollReveal animation="zoom" className="h-full w-full relative">
          <Image
            src="/images/hero.png"
            alt="Strategic Growth Background"
            fill
            sizes="100vw"
            className="object-cover opacity-10"
            priority
          />
        </ScrollReveal>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
      </div>

      <div className="section-padding relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal className="space-y-8 max-w-2xl">
          <div className="inline-block px-3 py-1 bg-primary/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full">
            Strategy · Advisory · Execution
          </div>
          <ScrollReveal animation="fade-in-up" delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-ink">
              Strategy That Builds <span className="text-primary">Influence</span>, Drives Growth, and Delivers <span className="text-primary">Impact</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-in-up" delay={200}>
            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              Master of Strategies is a strategy consulting, political advisory, and event management firm helping organizations, leaders, and institutions solve complex challenges through structured thinking, strong positioning, and disciplined execution.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-in-up" delay={300} className="flex flex-wrap gap-4 pt-4">
            <Link href="mailto:mos@masterofstrategies.com?subject=Consultation%20Request" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </ScrollReveal>
        </ScrollReveal>
        
        <ScrollReveal animation="scale" delay={200} className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
          <Image
            src="/images/hero.png"
            alt="Strategic Consulting"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/5"></div>
        </ScrollReveal>
      </div>
    </section>
  );
}
