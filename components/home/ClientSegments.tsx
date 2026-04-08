import ScrollReveal from "@/components/ScrollReveal";

export default function ClientSegments() {
  const clients = [
    { 
      name: "Corporates", 
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> 
    },
    { 
      name: "Startups", 
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> 
    },
    { 
      name: "Political Leaders", 
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> 
    },
    { 
      name: "Foundations", 
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" /></svg> 
    },
    { 
      name: "Social Impact Organizations", 
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg> 
    },
    { 
      name: "Policy Institutions", 
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg> 
    },
    { 
      name: "Industry Platforms", 
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> 
    }
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <ScrollReveal className="text-center mb-16 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Ecosystem Access</h2>
        <h3 className="text-4xl font-bold">Who We Work With</h3>
        <p className="text-secondary max-w-2xl mx-auto">
          We work with organizations that value strategy, structure, and long-term growth.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clients.map((client, idx) => (
          <ScrollReveal key={idx} delay={idx * 100} animation="scale" className={`p-8 rounded-2xl border border-slate-100 transition-all duration-300 group flex flex-col items-center text-center space-y-4 ${
            idx % 2 === 0 
              ? "bg-white hover:border-primary/20 hover:shadow-[0_10px_40px_-15px_rgba(37,99,235,0.1)]" 
              : "bg-blue-50/30 hover:border-accent/20 hover:shadow-[0_10px_40px_-15px_rgba(234,179,8,0.1)]"
          }`}>
            <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              idx % 2 === 0 
                ? "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white" 
                : "bg-accent/5 text-accent group-hover:bg-accent group-hover:text-white"
            }`}>
              {client.icon}
            </div>
            <span className="text-sm font-bold text-ink group-hover:text-primary transition-colors">
              {client.name}
            </span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
