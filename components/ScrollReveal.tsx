"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in-up" | "scale" | "zoom" | "fade-in-left" | "fade-in-right" | "none";
  delay?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && domRef.current) {
              observer.unobserve(domRef.current);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once]);

  const getAnimationClass = () => {
    switch (animation) {
      case "scale":
        return "animate-scale";
      case "zoom":
        return "animate-zoom";
      case "fade-in-left":
        return "animate-slide-left";
      case "fade-in-right":
        return "animate-slide-right";
      case "none":
        return "reveal-visible"; // Simple fade or just show
      default:
        return "";
    }
  };

  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <div
      ref={domRef}
      className={`reveal ${isVisible ? `reveal-visible ${getAnimationClass()} ${delayClass}` : ""} ${className}`}
    >
      {children}
    </div>
  );
}
