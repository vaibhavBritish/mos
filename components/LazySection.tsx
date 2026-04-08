"use client";

import { useEffect, useRef, useState } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  threshold?: number;
  minHeight?: string;
  className?: string;
}

export default function LazySection({
  children,
  threshold = 0.1,
  minHeight = "400px",
  className = "",
}: LazySectionProps) {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold, rootMargin: "200px" } // Load slightly before coming into view
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div 
      ref={sectionRef} 
      className={className} 
      style={{ minHeight: !isInView ? minHeight : "auto" }}
    >
      {isInView ? children : null}
    </div>
  );
}
