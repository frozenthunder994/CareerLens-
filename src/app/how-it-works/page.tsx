'use client';

import React, { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

export default function HowItWorksPage() {
  useReveal();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Semantic Parsing", detail: "We don't just look for words. Our agentic parser identifies context, responsibility level, and technical depth in your project descriptions using vector embeddings." },
    { title: "Live Intelligence", detail: "When you target a company, our agents sweep Reddit for interview experiences, GitHub for hire profiles, and engineering blogs for tech stack shifts from the last 90 days." },
    { title: "Gap Verification", detail: "Your profile is mathematically compared against the live verified requirements. We calculate 'distance' between your skills and their expectations." },
    { title: "Map Synthesis", detail: "Gaps are prioritized by their impact on your hireability. High-impact gaps get assigned deeper projects and targeted resource paths." },
    { title: "Future Projection", detail: "Simulate your profile after completing the roadmap. We re-run the matching algorithm to show your new probability of offer." }
  ];

  return (
    <div className="how-it-works-page pt-32 pb-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="mb-20 space-y-4">
          <div className="pill" data-reveal="fade-left">Transparency First</div>
          <h1 className="text-6xl md:text-8xl leading-tight text-[#1a0a0a]" data-reveal="fade-left" data-delay="100">
            The <em className="highlight-draw">Engine.</em>
          </h1>
        </div>

        {/* Section 1: Interactive Stepper */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-4">
              {steps.map((step, i) => (
                <button 
                  key={i}
                  onMouseEnter={() => setActiveStep(i)}
                  className={`w-full text-left p-8 rounded-2xl border transition-all duration-300 ${
                    activeStep === i 
                    ? 'bg-[#1a0a0a] text-white border-[#1a0a0a] translate-x-4 shadow-xl' 
                    : 'bg-white text-[#1a0a0a] border-[#e2dbd3] hover:border-[#c94a2a]'
                  }`}
                  data-reveal="fade-right"
                  data-delay={i * 100}
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-4xl font-syne font-bold ${activeStep === i ? 'text-[#c94a2a]' : 'text-[#8a7a72]'}`}>
                      0{i + 1}
                    </span>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                </button>
              ))}
            </div>
            <div className="card p-12 h-full flex flex-col justify-center min-h-[400px]" data-reveal="fade-left">
              <div className="space-y-8">
                <div className="w-16 h-1 bg-[#c94a2a]"></div>
                <h2 className="text-5xl font-bold">{steps[activeStep].title}</h2>
                <p className="text-[#8a7a72] text-2xl leading-relaxed">
                  {steps[activeStep].detail}
                </p>
                <div className="pt-8 font-mono text-sm text-[#c94a2a]">
                  SIGNAL_CONFIDENCE: 98.4%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Data Sources Grid */}
        <section className="py-32 grid md:grid-cols-3 gap-8">
          {[
            { name: "LinkedIn", type: "Jobs", bio: "Recent postings and hiring manager signals." },
            { name: "Glassdoor", type: "Interviews", bio: "Q&A formats and difficulty shifts from the last 90 days." },
            { name: "Reddit", type: "Community", bio: "Unfiltered feedback from current employees and candidates." },
            { name: "GitHub", type: "Profiles", bio: "Code patterns and tech stacks of recent engineering hires." },
            { name: "Eng Blogs", type: "Architecture", bio: "Company-specific tech stack and engineering priorities." },
            { name: "Naukri", type: "Market", bio: "Regional demand and salary/skill correlation data." }
          ].map((source, i) => (
            <div key={i} className="card-dark p-8 space-y-4" data-reveal="scale-up" data-delay={i * 50}>
              <div className="flex justify-between items-center">
                <span className="pill">{source.type}</span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold">{source.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{source.bio}</p>
            </div>
          ))}
        </section>

        {/* Section 3: Static vs Live Comparison */}
        <section className="py-32 card bg-white overflow-hidden" data-reveal="fade-up">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Why live data matters.</h2>
            <p className="text-[#8a7a72]">Example: Google ML Engineer Requirements</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[#e2dbd3]">
            <div className="bg-white p-12 space-y-8">
              <div className="text-sm uppercase font-bold text-[#8a7a72] tracking-widest">Static Database (6 months ago)</div>
              <ul className="space-y-4 text-xl">
                <li className="flex items-center gap-4 text-red-500">✗ TensorBoard proficiency</li>
                <li className="flex items-center gap-4 text-red-500">✗ Legacy Keras focus</li>
                <li className="flex items-center gap-4 text-red-500">✗ Basic unit testing</li>
              </ul>
            </div>
            <div className="bg-[#f5f2ec] p-12 space-y-8">
              <div className="text-sm uppercase font-bold text-[#c94a2a] tracking-widest">CareerLens Live (Today)</div>
              <ul className="space-y-4 text-xl">
                <li className="flex items-center gap-4 text-green-600">✓ JAX / XLA optimization</li>
                <li className="flex items-center gap-4 text-green-600">✓ Triton kernels knowledge</li>
                <li className="flex items-center gap-4 text-green-600">✓ Distributed training (FSDP)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
