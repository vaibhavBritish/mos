import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-ink text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <ScrollReveal animation="zoom" className="h-full w-full relative">
            <Image
              src="/images/hero.png"
              alt="About Background"
              fill
              className="object-cover"
              priority
            />
          </ScrollReveal>
        </div>
        <ScrollReveal className="section-padding relative z-10 text-center space-y-6">
          <h1 className="text-base font-bold uppercase tracking-[0.3em] text-accent">About Us</h1>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Strategy. Execution. <span className="text-primary">Impact.</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </ScrollReveal>
      </section>

      {/* WHO WE ARE */}
      <section className="section-padding bg-white overflow-hidden">
        <ScrollReveal className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6 text-center">
            <h3 className="text-4xl font-bold text-ink">Who We Are</h3>
            <p className="text-2xl text-secondary leading-relaxed font-medium italic">
              "Strategy should not remain in presentations. Strategy should create outcomes."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-secondary leading-relaxed text-xl">
              <p>
                Master of Strategies is a strategy consulting and execution firm working with organizations, leaders, and institutions to solve complex challenges through structured thinking, strong positioning, and disciplined execution.
              </p>
              <p>
                We operate at the intersection of strategy consulting, political advisory, event management, strategic communications, and social impact consulting, helping our partners move from ideas to implementation.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-6">
              <h4 className="font-bold text-ink">We help organizations:</h4>
              <ul className="space-y-4">
                {[
                  "Design practical strategies",
                  "Strengthen institutional positioning",
                  "Build meaningful partnerships",
                  "Execute high-impact programs",
                  "Create long-term visibility"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* VISION & MISSION */}
      <section className="section-padding bg-blue-50/30 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto text-center lg:text-left">
          <ScrollReveal animation="scale" className="bg-white p-12 rounded-3xl shadow-sm border border-primary/5 space-y-6">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto lg:mx-0">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-ink">Our Vision</h3>
            <p className="text-secondary leading-relaxed italic">
              "To become a trusted strategy and execution partner for organizations shaping business, governance, and social impact ecosystems."
            </p>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={200} className="bg-white p-12 rounded-3xl shadow-sm border border-accent/5 space-y-6">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mx-auto lg:mx-0">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-ink">Our Mission</h3>
            <p className="text-secondary leading-relaxed italic">
              "To help organizations succeed through clarity, structure, and execution excellence."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* OUR APPROACH - STRATEGIC FRAMEWORK */}
      <section className="section-padding bg-white relative overflow-hidden">
        <ScrollReveal className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Strategic Framework</h2>
          <h3 className="text-4xl font-bold">Our Approach</h3>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {[
            {
              title: "Research & Understanding",
              desc: "Landscape analysis, stakeholder mapping, and opportunity identification.",
              items: ["Market understanding", "Stakeholder mapping", "Competitive analysis", "Opportunity identification"]
            },
            {
              title: "Strategy Design",
              desc: "Structured strategies aligned with your institutional goals.",
              items: ["Positioning strategy", "Growth frameworks", "Engagement strategy", "Communication architecture"]
            },
            {
              title: "Execution",
              desc: "Supporting rollout across programs, campaigns, and convenings.",
              items: ["Program execution", "Campaign management", "Event execution", "Stakeholder engagement"]
            },
            {
              title: "Impact Measurement",
              desc: "Tracking progress and refining strategies for long-term value.",
              items: ["Performance tracking", "Outcome analysis", "Strategic reviews", "Strategic refinement"]
            }
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <h4 className="text-xl font-bold mb-4 pt-2">{item.title}</h4>
              <p className="text-sm text-secondary/70 mb-6">{item.desc}</p>
              <ul className="space-y-2 border-t border-slate-200 pt-6">
                {item.items.map((sub, i) => (
                  <li key={i} className="text-sm font-semibold flex items-center gap-2">
                    <span className="text-accent">•</span> {sub}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* DIFFERENTIATORS & VALUES */}
      <section className="section-padding bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.08),transparent_50%)]"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
          <ScrollReveal className="lg:col-span-5 space-y-16">
            <div className="space-y-6">
              <h2 className="text-base font-bold uppercase tracking-widest text-accent flex items-center gap-4">
                <span className="w-12 h-px bg-accent"></span>
                Our Advantage
              </h2>
              <h3 className="text-4xl font-bold leading-tight uppercase text-white">What Makes Us <br/><span className="text-primary italic">Different</span></h3>
            </div>
            <div className="space-y-10">
              {[
                { t: "Strategy + Execution Model", d: "Most firms either consult or execute. We do both." },
                { t: "Structured Thinking", d: "We apply consulting frameworks rather than ad-hoc approaches." },
                { t: "Ecosystem Understanding", d: "We understand how business, policy, and social impact function together." },
                { t: "Outcome Focus", d: "We prioritize results, not just activity." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                   <div className="flex-shrink-0 flex flex-col items-center">
                     <span className="text-primary font-bold text-2xl group-hover:scale-110 transition-transform duration-300">/0{idx + 1}</span>
                     <div className="w-px h-full bg-white/20 mt-4"></div>
                   </div>
                   <div className="space-y-3 pb-8">
                     <h4 className="font-bold text-2xl text-white group-hover:text-primary transition-colors">{item.t}</h4>
                     <p className="text-slate-100 text-lg leading-relaxed max-w-md opacity-90">{item.d}</p>
                   </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="lg:col-span-7 space-y-12">
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[2rem] border border-white/10 shadow-2xl space-y-12">
              <div className="space-y-4">
                <h2 className="text-base font-bold uppercase tracking-widest text-primary">Foundational Beliefs</h2>
                <h3 className="text-4xl font-bold italic">Our Core Values</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {[
                  { t: "Integrity", d: "Trust is the foundation of our work.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
                  { t: "Excellence", d: "Focus on quality and structure.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" },
                  { t: "Responsibility", d: "Commitment to meaningful impact.", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" },
                  { t: "Collaboration", d: "Partnerships create outcomes.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                  { t: "Discipline", d: "Execution quality matters.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
                ].map((val, idx) => (
                  <div key={idx} className="space-y-4 group">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-ink transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={val.icon} /></svg>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{val.t}</h4>
                      <p className="text-white/80 text-base leading-relaxed group-hover:text-white transition-colors">{val.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CLIENT PHILOSOPHY */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <ScrollReveal className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Our Values in Action</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Our Client Philosophy</h3>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              We work best with organizations that value strategic thinking, believe in structured execution, and prioritize credibility and impact.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { 
                t: "Value Thinking", 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" /></svg> 
              },
              { 
                t: "Seek Growth", 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> 
              },
              { 
                t: "Want Trust", 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> 
              },
              { 
                t: "Prioritize Impact", 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg> 
              },
              { 
                t: "Execute Discipline", 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg> 
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} animation="scale" className="bg-white p-10 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.1)] hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center space-y-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  idx % 2 === 0 
                    ? "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white" 
                    : "bg-accent/5 text-accent group-hover:bg-accent group-hover:text-white"
                }`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-ink transition-colors group-hover:text-primary">
                  {item.t}
                </h4>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="pt-12 border-t border-slate-100">
             <p className="text-3xl font-bold text-ink leading-tight">
               Our goal is not to be the biggest consulting firm.<br/>
               <span className="text-primary italic">Our goal is to be the most trusted strategy partner for our clients.</span>
             </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        <ScrollReveal className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-base font-bold uppercase tracking-widest text-accent">Let's Work Together</h2>
          <h3 className="text-4xl md:text-6xl font-bold">Building Long Term Value</h3>
          <p className="text-white/80 text-2xl leading-relaxed">
            If you are looking for a strategy partner who understands both thinking and execution, we would be glad to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Link href="/contact" className="bg-white text-primary px-12 py-4 rounded-md font-bold hover:bg-slate-50 transition-all shadow-xl">
              Contact Us
            </Link>
            <Link href="/services" className="border-2 border-white/30 text-white px-12 py-4 rounded-md font-bold hover:bg-white/10 transition-all">
              Explore Services
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
