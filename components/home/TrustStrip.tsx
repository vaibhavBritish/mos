export default function TrustStrip() {
  return (
    <div className="bg-primary py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee items-center text-white/80 text-sm font-medium tracking-widest uppercase">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-12 px-6 items-center">
            <span>Strategy Consulting</span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            <span>Political Advisory</span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            <span>Event Management</span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            <span>Strategic Communications</span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            <span>Social Impact Consulting</span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            <span>Research & Intelligence</span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
