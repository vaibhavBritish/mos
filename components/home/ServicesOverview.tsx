import ScrollReveal from "@/components/ScrollReveal";

export default function ServicesOverview() {
  const services = [
    {
      title: "Strategy Consulting",
      desc: "We help organizations design growth strategies, improve market positioning, and build scalable institutional frameworks.",
      items: ["Business strategy", "Growth planning", "Market positioning", "Partnership strategy", "Organizational advisory"]
    },
    {
      title: "Political & Governance Consulting",
      desc: "We support leaders and institutions with structured political strategy, constituency engagement, and public positioning.",
      items: ["Campaign strategy", "Leadership positioning", "Public engagement", "Political communication", "Constituency frameworks"]
    },
    {
      title: "Strategic Communications",
      desc: "We help organizations build strong visibility through structured communication and brand positioning.",
      items: ["Brand positioning", "Narrative strategy", "PR strategy", "Digital visibility", "Thought leadership"]
    },
    {
      title: "Social Impact Consulting",
      desc: "We support foundations, NGOs, and impact organizations in designing programs and building partnerships.",
      items: ["Program design", "Partnership strategy", "Fundraising positioning", "Impact communication", "Stakeholder engagement"]
    },
    {
      title: "Event Management & Strategic Convenings",
      desc: "We design and execute high-impact events that bring together decision-makers and industry leaders.",
      items: ["Leadership roundtables", "CXO forums", "Policy dialogues", "Corporate conferences", "Multi-stakeholder summits"]
    },
    {
      title: "Research & Strategic Intelligence",
      desc: "Our research capabilities help organizations make informed decisions through structured insights.",
      items: ["Market research", "Political intelligence", "Sector mapping", "Stakeholder research", "Strategic reports"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white overflow-hidden">
      <ScrollReveal className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
        <p className="text-secondary max-w-2xl mx-auto">
          Comprehensive strategic support tailored for high-stakes environments.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <ScrollReveal key={idx} delay={idx * 150} animation="fade-in-up" className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/5 text-primary rounded-lg mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="text-sm text-secondary mb-6 leading-relaxed">{service.desc}</p>
            <ul className="space-y-2">
              {service.items.map((item, i) => (
                <li key={i} className="text-xs font-semibold text-ink flex items-center gap-2">
                  <span className="text-accent">→</span> {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
