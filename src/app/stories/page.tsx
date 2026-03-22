'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import Link from 'next/link';

export default function StoriesPage() {
  useReveal();

  const stories = [
    { name: "Sneha R.", company: "Razorpay", role: "SDE-2", match: "34% → 91%", time: "4.5 months", text: "The roadmap was surgical. I went from rejected to offer letter in 4 months." },
    { name: "Mihir S.", company: "Microsoft", role: "Backend Engineer", match: "41% → 88%", time: "5 months", text: "I didn't know System Design was my gap. This agent identified it in seconds." },
    { name: "Riya C.", company: "CRED", role: "Product Engineer", match: "29% → 94%", time: "6 months", text: "CareerLens focused me on the exact Redis patterns CRED loves. Life changing." },
    { name: "Karthik G.", company: "Goldman Sachs", role: "Quant Dev", match: "52% → 89%", time: "3 months", text: "The C++ concurrency gaps were exactly what showed up in the technical rounds." },
    { name: "Priya V.", company: "Zepto", role: "Frontend Lead", match: "45% → 92%", time: "4 months", text: "From a service-based background to a top product startup. The agent mapped the way." },
    { name: "Dev A.", company: "Atlassian", role: "Cloud SDE", match: "38% → 87%", time: "5.5 months", text: "The simulation mode gave me the confidence to negotiate a higher offer." }
  ];

  return (
    <div className="stories-page pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="mb-20 space-y-4">
          <div className="pill" data-reveal="fade-left">Student Success</div>
          <h1 className="text-6xl md:text-8xl leading-tight text-[#1a0a0a]" data-reveal="fade-left" data-delay="100">
            Real Resumes. <br /><em className="highlight-draw">Real Offers.</em>
          </h1>
        </div>

        {/* Featured Story */}
        <div className="card-dark p-16 mb-12 relative overflow-hidden group" data-reveal="scale-up">
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="w-16 h-16 rounded-full bg-[#c94a2a] flex items-center justify-center text-4xl">🎓</div>
              <h2 className="text-5xl font-bold">Arjun Krishnan</h2>
              <p className="text-white/60 text-2xl leading-relaxed">
                "Match score was 31% initially. CareerLens found the exact PyTorch gaps Google wanted for their LLM infrastructure team."
              </p>
              <div className="flex gap-8 border-t border-white/10 pt-8 mt-8">
                <div>
                  <div className="text-[#c94a2a] text-3xl font-bold">94%</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mt-1">Final Match</div>
                </div>
                <div>
                  <div className="text-white text-3xl font-bold">Google</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mt-1">Landed Offer</div>
                </div>
                <div>
                  <div className="text-white text-3xl font-bold">9 Months</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mt-1">Preparation</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                <div className="text-white/20 text-9xl font-syne font-bold">G</div>
              </div>
            </div>
          </div>
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#c94a2a]/10 rounded-full blur-[120px] group-hover:bg-[#c94a2a]/20 transition-all duration-700"></div>
        </div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {stories.map((s, i) => (
            <div key={i} className="card testi-card group" data-reveal="fade-up" data-delay={i * 100}>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">{s.name}</h3>
                    <div className="text-sm text-[#8a7a72]">{s.role} @ {s.company}</div>
                  </div>
                  <span className="pill">{s.time}</span>
                </div>
                <p className="text-[#1a0a0a] italic text-lg leading-relaxed">"{s.text}"</p>
                <div className="pt-4 flex items-center justify-between border-t border-[#e2dbd3]">
                  <div className="text-[#c94a2a] font-bold">{s.match}</div>
                  <div className="text-xs uppercase tracking-widest text-[#8a7a72]">Score Pivot</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <section className="stats-band py-24 px-8 rounded-3xl overflow-hidden mb-32" data-reveal="scale-up">
          <div className="grid md:grid-cols-4 gap-12 text-center stats-inner relative z-10">
            {[
              { val: "+44pt", label: "Avg Improvement" },
              { val: "5.2m", label: "Avg Offer Lag" },
              { val: "47+", label: "Target Companies" },
              { val: "4.8/5", label: "Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-6xl font-syne font-extrabold text-[#c94a2a]">{stat.val}</div>
                <div className="text-sm font-medium text-white/40 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Submission Form */}
        <section className="max-w-[800px] mx-auto text-center space-y-12" data-reveal="fade-up">
          <h2 className="text-4xl font-bold">Landed an offer? Share your pivot.</h2>
          <div className="card text-left p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="w-full p-4 rounded-xl border border-[#e2dbd3] bg-[#faf8f3]" />
              <input type="text" placeholder="College" className="w-full p-4 rounded-xl border border-[#e2dbd3] bg-[#faf8f3]" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Target Company" className="w-full p-4 rounded-xl border border-[#e2dbd3] bg-[#faf8f3]" />
              <input type="text" placeholder="Landed Company" className="w-full p-4 rounded-xl border border-[#e2dbd3] bg-[#faf8f3]" />
            </div>
            <textarea placeholder="Your story (quote)" rows={4} className="w-full p-4 rounded-xl border border-[#e2dbd3] bg-[#faf8f3]"></textarea>
            <button className="btn-primary w-full py-5 text-lg">Submit My Story</button>
          </div>
        </section>
      </div>
    </div>
  );
}
