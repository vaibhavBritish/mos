import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServicesPage() {
  const practiceAreas = [
    {
      title: "Strategy Consulting",
      tagline: "Helping Organizations Design Growth, Positioning, and Institutional Strategy",
      desc: "We support organizations in designing structured strategies that enable sustainable growth, improve market positioning, and strengthen institutional credibility.",
      services: [
        "Business growth strategy",
        "Market positioning strategy",
        "Institutional strategy development",
        "Partnership and ecosystem strategy",
        "Expansion strategy",
        "Organizational advisory"
      ],
      ideal: "Corporates, startups, NGOs, institutions, and leadership teams looking for structured growth."
    },
    {
      title: "Political & Governance Consulting",
      tagline: "Strategic Advisory for Leaders, Campaigns, and Public Engagement",
      desc: "We provide structured political consulting services focused on leadership positioning, campaign strategy, and constituency engagement.",
      services: [
        "Campaign strategy design",
        "Leadership visibility strategy",
        "Constituency engagement frameworks",
        "Political communication strategy",
        "Public outreach programs",
        "Research-based positioning"
      ],
      ideal: "Political leaders, public representatives, policy platforms, and governance institutions."
    },
    {
      title: "Strategic Communications Consulting",
      tagline: "Building Visibility Through Structured Communication Strategy",
      desc: "We help organizations strengthen their visibility, credibility, and positioning through structured communication and narrative design.",
      services: [
        "Brand positioning strategy",
        "Messaging and narrative architecture",
        "PR and media strategy",
        "Digital visibility strategy",
        "Thought leadership positioning",
        "Institutional communication strategy"
      ],
      ideal: "Organizations looking to improve visibility and credibility in their sector."
    },
    {
      title: "Social Impact Consulting",
      tagline: "Supporting NGOs, Foundations, and Impact Organizations",
      desc: "We work with social impact organizations to design strong programs, partnerships, and engagement platforms that improve effectiveness and visibility.",
      services: [
        "Program design and strategy",
        "Partnership development strategy",
        "Donor engagement strategy",
        "Impact storytelling",
        "Stakeholder engagement platforms",
        "Knowledge convenings"
      ],
      ideal: "Foundations, NGOs, CSR programs, and development sector institutions."
    },
    {
      title: "Research & Strategic Intelligence",
      tagline: "Supporting Better Decisions Through Structured Insights",
      desc: "We provide research and intelligence services that help organizations understand stakeholders, markets, and opportunities.",
      services: [
        "Market research",
        "Political intelligence",
        "Stakeholder mapping",
        "Sector research",
        "Strategic reports",
        "Opportunity assessments"
      ],
      ideal: "Organizations requiring research-backed decision support."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden border-b border-slate-100">
        <ScrollReveal className="section-padding relative z-10 space-y-8">
          <div className="flex items-center gap-4 text-primary font-bold uppercase tracking-[0.3em] text-sm">
            <span className="w-12 h-px bg-primary"></span>
            Our Expertise
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-ink leading-tight">
            Services Designed for <br/>
            <span className="text-primary italic">Real Outcomes.</span>
          </h1>
          <p className="text-2xl text-secondary max-w-3xl leading-relaxed">
            At Master of Strategies, we provide integrated consulting and execution services that help organizations design the right strategy, build strong positioning, and execute high-impact initiatives.
          </p>
        </ScrollReveal>
      </section>

      {/* CORE PRACTICE AREAS */}
      <section className="section-padding bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {practiceAreas.map((area, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-ink group-hover:text-primary transition-colors">{area.title}</h3>
                  <p className="text-primary font-semibold text-sm italic">{area.tagline}</p>
                </div>
                <p className="text-lg text-secondary leading-relaxed">{area.desc}</p>
                <div className="pt-6 border-t border-slate-50">
                  <h4 className="font-bold text-ink mb-4">Core Capabilities:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {area.services.map((service, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-secondary">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                  <span className="text-xs font-bold uppercase text-primary tracking-widest block mb-2">Ideal For</span>
                  <p className="text-sm font-semibold text-ink leading-relaxed">{area.ideal}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* EVENT MANAGEMENT SPECIAL SECTION */}
      <section className="section-padding bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.1),transparent_50%)]"></div>
        <div className="relative z-10 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="space-y-8">
              <div className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-accent text-xs font-bold uppercase tracking-widest">
                Specialized Practice
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                Event Management & <br/>
                <span className="text-primary italic">Strategic Convening</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                We specializing in events that are not just logistical gatherings, but strategic platforms for institutional positioning and ecosystem engagement.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="scale" delay={200} className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10">
              <Image 
                src="/images/events.png" 
                alt="Strategic Events" 
                fill 
                className="object-cover" 
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"></div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                t: "Concept & Design", 
                d: "We begin with the strategic purpose. Agenda design, speaker identification, and experience architecture.",
                items: ["Concept development", "Agenda design", "Speaker outreach", "Stakeholder mapping"]
              },
              { 
                t: "Execution & Ops", 
                d: "End-to-end implementation including venue, vendor, and multi-layered logistics management.",
                items: ["Venue management", "Production ops", "Logistics coordination", "Operations control"]
              },
              { 
                t: "Post-Event Strategy", 
                d: "Measuring progress beyond the event through reporting, analytics, and stakeholder follow-up.",
                items: ["Impact documentation", "Visibility strategy", "Engagement analytics", "Strategic reports"]
              }
            ].map((cap, i) => (
              <ScrollReveal key={i} delay={i * 150} animation="scale" className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6 hover:bg-white/10 transition-all group text-left">
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">0{i+1}</div>
                <h4 className="text-2xl font-bold text-white uppercase">{cap.t}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{cap.d}</p>
                <div className="pt-4 space-y-2">
                  {cap.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-bold text-accent">
                      <div className="w-1 h-1 bg-accent rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="space-y-12 pt-10">
            <h3 className="text-3xl font-bold text-center text-white">Types of Events We Support</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Leadership Roundtables", "CXO Forums", "Policy Dialogues", "Stakeholder Consultations", "Knowledge Platforms", "Annual Flagships"
              ].map((type, i) => (
                <div key={i} className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-sm tracking-wide hover:border-primary hover:text-primary transition-all">
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DELIVERY MODEL */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-20">
          <ScrollReveal className="text-center space-y-4">
             <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Engagement Excellence</h2>
             <h3 className="text-4xl md:text-5xl font-bold">The Service Delivery Model</h3>
             <div className="w-24 h-1 bg-accent mx-auto"></div>
          </ScrollReveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-[60px] left-0 w-full h-px bg-slate-100 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
              {[
                { s: "Discovery", d: "Understanding objectives and specific challenges." },
                { s: "Research", d: "Stakeholder analysis and opportunity mapping." },
                { s: "Strategy", d: "Designing structured and scalable solutions." },
                { s: "Execution", d: "Program, campaign, or event implementation." },
                { s: "Impact", d: "Measurement and strategic improvement." }
              ].map((step, i) => (
                <ScrollReveal key={i} delay={i * 100} className="text-center space-y-6 group">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center mx-auto text-ink font-bold text-xl group-hover:border-primary group-hover:text-primary transition-all duration-300">
                    {i + 1}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">{step.s}</h4>
                    <p className="text-sm text-secondary leading-relaxed px-4">{step.d}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES & MODELS GRID */}
      <section className="section-padding bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-12 rounded-[2rem] border border-slate-100 space-y-10">
             <h3 className="text-3xl font-bold text-ink">Industries We Support</h3>
             <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                {[
                  "Social Impact", "Public Policy", "Corporate Sector", "Political Ecosystem", "Education", "Technology"
                ].map((ind, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-default">
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-xl font-bold text-ink group-hover:text-primary transition-all">{ind}</span>
                  </div>
                ))}
             </div>
          </div>
          <div className="bg-white p-12 rounded-[2rem] border border-slate-100 space-y-10">
             <h3 className="text-3xl font-bold text-ink">Engagement Models</h3>
             <div className="space-y-4">
                {[
                  { m: "Strategic Consulting", d: "One-off strategic design." },
                  { m: "Program Assignments", d: "Project-based execution." },
                  { m: "Event Execution Partnerships", d: "Operational delivery." },
                  { m: "Retainer Advisory", d: "Long-term strategic support." }
                ].map((model, i) => (
                  <div key={i} className="flex justify-between items-center p-5 rounded-xl border border-slate-50 hover:bg-slate-50 transition-all">
                    <span className="font-bold text-ink">{model.m}</span>
                    <span className="text-xs text-secondary italic">{model.d}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section-padding bg-primary text-white text-center space-y-10 overflow-hidden">
        <ScrollReveal className="max-w-4xl mx-auto space-y-8">
           <h2 className="text-5xl font-bold leading-tight">Ready to Move from <br/><span className="text-accent">Strategy to Execution?</span></h2>
           <p className="text-xl text-white/80 leading-relaxed font-medium">
             Let’s design the framework that helps you build influence, drive growth, and deliver measurable impact.
           </p>
           <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link href="/contact" className="bg-white text-primary px-12 py-4 rounded-md font-bold text-lg hover:shadow-2xl transition-all">
                Partner With Us
              </Link>
              <Link href="/about" className="border-2 border-white/30 text-white px-12 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-all">
                Learn About Our Firm
              </Link>
           </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
