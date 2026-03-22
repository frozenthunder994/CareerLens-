'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import Link from 'next/link';

export default function FeaturesPage() {
  useReveal();

  const features = [
    {
      title: "Resume Parser",
      desc: "Deep semantic extraction of your technical skills from any PDF.",
      type: "resume",
      demo: "Paste textarea → Claude API call → animated skill tags render"
    },
    {
      title: "Live Intel Fetch",
      desc: "Real-time sweep of LinkedIn, Glassdoor, and Engineering Blogs.",
      type: "intel",
      demo: "Company + role input → Claude API with web_search → live feed"
    },
    {
      title: "Semantic Gap Analysis",
      desc: "Mathematical similarity matching between your profile and target roles.",
      type: "gap",
      demo: "Extracted skills + company profile → animated donut chart + gap tags"
    },
    {
      title: "Roadmap Generator",
      desc: "Chunk-based streaming of personalized week-by-week learning paths.",
      type: "roadmap",
      demo: "Gap skills → streaming Claude API → week cards render in chunks"
    },
    {
      title: "Career Simulation",
      desc: "Project your probability of hire 6 months into the future.",
      type: "sim",
      demo: "Before/after radar charts with animated SVG transition"
    },
    {
      title: "Company Comparison",
      desc: "Parallel analysis of multiple companies to optimize your strategy.",
      type: "compare",
      demo: "3 parallel Claude API calls → comparison table + strategy summary"
    }
  ];

  return (
    <div className="features-page pt-32 pb-24 px-8 max-w-[1440px] mx-auto min-h-screen">
      <div className="mb-20 space-y-4">
        <div className="pill" data-reveal="fade-left">Technical Showcase</div>
        <h1 className="text-6xl md:text-8xl leading-tight text-[#1a0a0a]" data-reveal="fade-left" data-delay="100">
          Agentic <br /><em className="highlight-draw">Capabilities.</em>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <div key={i} className="card-dark group overflow-hidden relative p-12" data-reveal="fade-up" data-delay={i * 100}>
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold">{f.title}</h2>
                <div className="w-10 h-10 rounded-full bg-[#c94a2a]/20 flex items-center justify-center text-[#c94a2a]">
                  {i + 1}
                </div>
              </div>
              <p className="text-white/60 text-lg leading-relaxed">
                {f.desc}
              </p>
              
              {/* Interactive Demo Placeholder */}
              <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10 font-mono text-xs text-[#c94a2a]/80 italic">
                {f.demo}
              </div>
              
              <Link href="/dashboard" className="btn-primary inline-flex mt-4">Try in Dashboard →</Link>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#c94a2a]/10 rounded-full blur-[80px] group-hover:bg-[#c94a2a]/20 transition-all duration-700"></div>
          </div>
        ))}
      </div>

      {/* Final CTA Strip */}
      <div className="mt-32 card bg-[#faf8f3] text-center space-y-8 p-20" data-reveal="scale-up">
        <h2 className="text-4xl font-bold">Experience the full suite.</h2>
        <p className="text-[#8a7a72] max-w-xl mx-auto">
          All features are integrated into the primary dashboard experience. Start your first analysis today.
        </p>
        <Link href="/dashboard" className="btn-primary text-lg px-12 py-5">Launch Dashboard</Link>
      </div>
    </div>
  );
}
