"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect, useState } from "react";

export default function InsightsPreview() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/blogs/latest")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setPosts(data);
      })
      .catch(err => console.error(err));
  }, []);

  const displayPosts = posts.length > 0 ? posts : [
    { title: "Why Strategy Fails Without Execution", category: "Strategy", excerpt: "Exploring the critical intersection of structured thinking and real-world outcomes..." },
    { title: "The Rise of Leadership Convenings", category: "Events", excerpt: "Exploring the critical intersection of structured thinking and real-world outcomes..." },
    { title: "Building Influence Through Events", category: "Positioning", excerpt: "Exploring the critical intersection of structured thinking and real-world outcomes..." }
  ];

  return (
    <section id="blog" className="section-padding bg-white overflow-hidden">
      <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-4xl font-bold">Insights & Perspectives</h2>
          <p className="text-secondary">
            We believe strong organizations are built on strong thinking. Our insights section shares perspectives on strategy, governance, and leadership.
          </p>
        </div>
        <Link href="/blogs" className="btn-secondary whitespace-nowrap">Read Insights</Link>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayPosts.map((post, idx) => (
          <ScrollReveal key={idx} delay={idx * 200} animation="fade-in-up" className="space-y-4 group cursor-pointer">
            <Link href={post.slug ? `/blogs/${post.slug}` : "#"}>
              <div className="aspect-[16/10] bg-slate-100 rounded-xl overflow-hidden relative mb-4">
                {post.image ? (
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                )}
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{post.category || post.c}</span>
                <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{post.title || post.t}</h4>
                <p className="text-sm text-secondary">{post.excerpt || "Exploring the critical intersection of structured thinking and real-world outcomes..."}</p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
