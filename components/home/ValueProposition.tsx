import ScrollReveal from "@/components/ScrollReveal";

export default function ValueProposition() {
  return (
    <section id="about" className="section-padding bg-yellow-50/30 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/20 skew-x-12 transform origin-top-right -z-0"></div>
      <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Strategy Without Execution Is Theory. <br className="hidden md:block" />
            <span className="text-secondary font-medium italic">Execution Without Strategy Is Risk.</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            At Master of Strategies, we believe real impact happens when strong strategy meets disciplined execution. We work with businesses, institutions, political leaders, and social impact organizations to design practical strategies and deliver high-impact programs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          {[
            "Build sustainable growth strategies",
            "Strengthen leadership positioning",
            "Improve stakeholder engagement",
            "Execute high-impact conferences",
            "Develop strong communication narratives",
            "Create institutional visibility"
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <span className="text-sm font-medium text-ink">{item}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
