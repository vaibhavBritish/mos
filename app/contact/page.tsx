"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "loading" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    inquiryType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", organization: "", email: "", inquiryType: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-100">
        <ScrollReveal className="section-padding relative z-10 space-y-8">
          <div className="flex items-center gap-4 text-primary font-bold uppercase tracking-[0.3em] text-sm">
            <span className="w-12 h-px bg-primary"></span>
            Partner with us
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-ink leading-tight">
            Building Strategies <br/>
            <span className="text-primary italic">Together.</span>
          </h1>
          <p className="text-2xl text-secondary max-w-2xl leading-relaxed">
            Connect with Master of Strategies to design high-impact initiatives and structured frameworks for your organization.
          </p>
        </ScrollReveal>
      </section>

      {/* CONTACT GRID */}
      <section className="section-padding bg-slate-50 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT: CONTACT FORM */}
          <ScrollReveal className="lg:col-span-7">
            {formStatus === "success" ? (
              <div className="bg-white p-16 rounded-[3rem] border border-slate-100 shadow-2xl flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-ink">Message Received.</h2>
                  <p className="text-xl text-secondary">
                    Thank you for reaching out. A member of our strategy <br/>team will connect with you shortly.
                  </p>
                </div>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="px-10 py-4 bg-slate-100 rounded-full font-bold text-ink hover:bg-slate-200 transition-all"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-2xl space-y-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-ink">Direct Inquiry</h2>
                  <p className="text-secondary">Please fill in the details below to start a conversation.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {formStatus === "error" && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm font-medium">
                      Something went wrong. Please try again or contact us via email.
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Full Name</label>
                      <input 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/5 transition-all font-medium text-ink"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Organization</label>
                      <input 
                        required
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        type="text" 
                        placeholder="Company / Institution"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/5 transition-all font-medium text-ink"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Email Address</label>
                      <input 
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/5 transition-all font-medium text-ink"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Inquiry Type</label>
                      <select 
                        required
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/5 transition-all font-medium text-ink appearance-none cursor-pointer"
                      >
                        <option value="">Select Service</option>
                        <option value="strategy">Strategy Consulting</option>
                        <option value="political">Political Advisory</option>
                        <option value="comm">Strategic Communications</option>
                        <option value="impact">Social Impact</option>
                        <option value="events">Event Management</option>
                        <option value="research">Strategic Intelligence</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Message Details</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we support your objectives?"
                      rows={5}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/5 transition-all font-medium text-ink"
                    ></textarea>
                  </div>

                  <button 
                    disabled={formStatus === "loading"}
                    className="w-full bg-primary text-white py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70"
                  >
                    {formStatus === "loading" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : "Submit Inquiry"}
                  </button>
                </form>
              </div>
            )}
          </ScrollReveal>

          {/* RIGHT: CONTACT INFO */}
          <ScrollReveal delay={200} className="lg:col-span-5 space-y-16 py-8">
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Direct Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:contact@masterofstrategies.com" className="group block space-y-2">
                    <p className="text-secondary font-semibold text-sm">General Inquiries</p>
                    <p className="text-3xl md:text-3xl font-bold text-ink group-hover:text-primary transition-colors">contact@masterofstrategies.com</p>
                    <div className="w-12 h-1 bg-accent group-hover:w-24 transition-all"></div>
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Institutional Presence</h3>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-ink">New Delhi, India</p>
                  <p className="text-lg text-secondary leading-relaxed">
                    Strategically headquartered in the national capital to serve political, institutional, and corporate ecosystems globally.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200 space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Our Ecosystem</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "New Delhi", "Mumbai", "Bengalore", "International Scope"
                  ].map((loc, i) => (
                    <span key={i} className="px-5 py-2 bg-white rounded-full border border-slate-200 text-sm font-bold text-ink">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-primary p-12 rounded-[2.5rem] text-white space-y-6 shadow-2xl relative overflow-hidden group">
               <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
               <h4 className="text-2xl font-bold italic">"Strategy is not just planning. It is disciplined execution towards a measurable outcome."</h4>
               <p className="text-primary-foreground/70 font-bold uppercase tracking-widest text-xs">— The MoS Philosophy</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL ANCHOR */}
      <section className="bg-white py-12 border-t border-slate-100">
        <div className="section-padding flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xl font-bold text-ink">We usually respond within 24–48 strategic business hours.</p>
          <div className="flex items-center gap-6">
            <Link href="/services" className="text-sm font-bold text-primary hover:underline underline-offset-8">Explore Our Expertise</Link>
            <div className="w-px h-6 bg-slate-200"></div>
            <Link href="/about" className="text-sm font-bold text-primary hover:underline underline-offset-8">Meet the Firm</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
