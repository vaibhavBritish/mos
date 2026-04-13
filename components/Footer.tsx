import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 overflow-hidden">
      <ScrollReveal className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={60}
                className="object-contain h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-secondary leading-relaxed">
              Master of Strategies is a strategy consulting and execution firm
              working across business strategy, political advisory, event
              management, and social impact. We move from ideas to implementation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-ink uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-secondary hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-secondary hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-secondary hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-secondary hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="#blog" className="text-sm text-secondary hover:text-primary transition-colors">Blogs</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-bold text-ink uppercase tracking-wider text-xs">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sm text-secondary hover:text-primary transition-colors">Strategy Consulting</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-secondary hover:text-primary transition-colors">Political Consulting</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-secondary hover:text-primary transition-colors">Event Management</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-secondary hover:text-primary transition-colors">Communication Strategy</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-secondary hover:text-primary transition-colors">Research</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-bold text-ink uppercase tracking-wider text-xs">
              Contact
            </h4>
            <div className="space-y-3">
              <p className="text-sm text-secondary">
                <span className="block font-semibold text-ink">Email</span>
                <a href="mailto:mos@masterofstrategies.com" className="hover:text-primary transition-colors">
                  mos@masterofstrategies.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary">
            © {new Date().getFullYear()} Master of Strategies (MoS). All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-secondary hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-secondary hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
