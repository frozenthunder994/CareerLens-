'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

export default function LandingPage() {
  useReveal();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');

  const companies = [
    "Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix", "Uber", "Airbnb",
    "Stripe", "Coinbase", "OpenAI", "Anthropic", "Tesla", "NVIDIA", "Adobe", "Salesforce",
    "Spotify", "Slack", "Discord", "GitHub", "Twitter", "LinkedIn", "Oracle", "IBM",
    "Intel", "Samsung", "Sony", "Toyota"
  ];

  return (
    <div className="landing-page overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero pt-32 pb-24 px-8 max-w-[1440px] mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="hero-content space-y-8">
            <div className="pill" data-reveal="fade-left">New: Agentic Search 2.0</div>
            <h1 className="text-6xl md:text-8xl leading-[0.95] tracking-tight text-[#1a0a0a]">
              {["Agentic", "Career", "Skills", "Analysis"].map((word, i) => (
                <span 
                  key={i} 
                  className="word inline-block opacity-0 translate-y-8 animate-word-rise mr-4"
                  style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  {word}
                </span>
              ))}
              <br />
              <span className="italic font-light text-[#c94a2a] inline-block opacity-0 translate-y-8 animate-word-rise" 
                    style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <em className="highlight-draw">live data.</em>
              </span>
            </h1>
            <p className="hero-sub text-lg text-[#8a7a72] max-w-xl leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              Upload your resume and select a target company. We utilize live technical signals to verify your skill gaps against *real-time* market requirements.
            </p>
            <div className="hero-actions flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
              <Link href="/dashboard" className="btn-primary text-lg px-10 py-5">Launch Analysis Free</Link>
              <button className="btn-ghost text-lg px-8 py-5">Watch demo →</button>
            </div>
          </div>
          
          <div className="hero-visual relative opacity-0 scale-95 animate-visual-rise" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            {/* Notebook paper behind */}
            <div className="absolute top-5 -left-3 -right-3 -bottom-3 bg-[#f0ece2] rounded-2xl border border-[#b4a08c]/30 z-[-1] rotate-[1.5deg] shadow-sm after:absolute after:inset-0 after:bg-[linear-gradient(rgba(180,160,140,0.12)_1px,transparent_1px)] after:bg-[length:100%_24px]"></div>
            
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 px-4 py-2 bg-white rounded-lg shadow-xl border border-[#e2dbd3] z-20 flex items-center gap-2 animate-float-badge-tl">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-xs font-mono font-bold text-[#1a0a0a]">MATCH: 91%</span>
            </div>
            <div className="absolute -bottom-6 -left-6 px-4 py-2 bg-white rounded-lg shadow-xl border border-[#e2dbd3] z-20 flex items-center gap-2 animate-float-badge-br">
              <span className="w-2 h-2 rounded-full bg-[#c94a2a]"></span>
              <span className="text-xs font-mono font-bold text-[#1a0a0a]">8 GAPS FOUND</span>
            </div>

            <div className="bg-[#1a0a0a] rounded-2xl overflow-hidden shadow-2xl border border-[#2d1515] data-reveal-blur-in" data-reveal="blur-in">
              <div className="bg-[#2d1515] px-4 py-3 flex items-center justify-between border-b border-[#ffffff]/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="bg-[#1a0a0a]/50 px-8 py-1 rounded-md text-[10px] font-mono text-white/40">careerlens.ai/analyze</div>
                <div className="w-8"></div>
              </div>
              <img src="/hero-dashboard.png" alt="Dashboard Preview" className="w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Section */}
      <section className="ticker py-12 bg-[#1a0a0a] overflow-hidden whitespace-nowrap border-y border-[#ffffff]/5">
        <div className="flex animate-scroll-left">
          {[...companies, ...companies].map((name, i) => (
            <span key={i} className="text-[#8a7a72] font-syne text-sm font-bold mx-12 uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity cursor-default">
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works py-32 px-8 bg-[#f5f2ec] how-wrap overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-20 space-y-4">
            <div className="pill" data-reveal="fade-left">Process</div>
            <h2 className="text-5xl md:text-6xl text-[#1a0a0a]" data-reveal="fade-left" data-delay="100">
              Built on <em className="highlight-draw">precise</em> intel.
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-12 relative z-10">
            {[
              { num: "01", title: "Parse", desc: "Deep semantic extraction of your technical skills." },
              { num: "02", title: "Fetch", desc: "Live agents sweep job boards and engineering blogs." },
              { num: "03", title: "Compare", desc: "Exact gap identification using vector similarity." },
              { num: "04", title: "Map", desc: "Personalized week-by-week curriculum generation." },
              { num: "05", title: "Scale", desc: "Profile simulation 6 months into the future." }
            ].map((step, i) => (
              <div key={i} className="step-item space-y-6" data-reveal="fade-up" data-delay={i * 100}>
                <div className="w-12 h-12 rounded-full bg-[#c94a2a] text-white flex items-center justify-center font-syne font-bold text-lg shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-[#8a7a72] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="stats-band py-24 px-8 overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-4 gap-12 text-center stats-inner">
          {[
            { val: "47k", label: "Analyses Done" },
            { val: "91%", label: "Placement Rate" },
            { val: "5.2m", label: "Avg. to Offer" },
            { val: "4.8", label: "Satisfaction" }
          ].map((stat, i) => (
            <div key={i} className="stat-item space-y-2" data-reveal="scale-up" data-delay={i * 150}>
              <div className="text-6xl md:text-7xl font-syne font-extrabold text-[#c94a2a]">{stat.val}</div>
              <div className="text-sm font-medium text-[#8a7a72] uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="features py-32 px-8 max-w-[1440px] mx-auto">
        <div className="mb-20 space-y-4">
          <div className="pill" data-reveal="fade-left">Capabilities</div>
          <h2 className="text-5xl md:text-6xl text-[#1a0a0a]" data-reveal="fade-left" data-delay="100">
            <em className="highlight-draw">An agent.</em> Not a database.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 card-dark flex flex-col justify-between p-12 overflow-hidden relative group" data-reveal="scale-up">
            <div className="space-y-6 z-10">
              <h3 className="text-4xl">Hiring Intelligence Alpha</h3>
              <p className="text-white/60 text-xl leading-relaxed max-w-xl">
                Our models crawl technical blogs, Reddit threads, and GitHub bios of recent hires for the exact company you target.
              </p>
              <button className="btn-primary">Explore Alpha →</button>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#c94a2a]/20 rounded-full blur-[100px] group-hover:bg-[#c94a2a]/30 transition-all duration-700"></div>
          </div>

          <div className="card space-y-6 flex flex-col justify-center corner-fold" data-reveal="scale-up" data-delay="100">
            <h3 className="text-2xl">Semantic Parser</h3>
            <p className="text-[#8a7a72]">Decodes hidden implications in your project descriptions to find transferable skills.</p>
          </div>
          
          <div className="card space-y-6 flex flex-col justify-center corner-fold" data-reveal="scale-up" data-delay="200">
            <h3 className="text-2xl">Real-time Scraping</h3>
            <p className="text-[#8a7a72]">No stale data. We fetch live job requirements directly when you hit analyze.</p>
          </div>

          <div className="card space-y-6 flex flex-col justify-center corner-fold" data-reveal="scale-up" data-delay="300">
            <h3 className="text-2xl">Roadmap Engine</h3>
            <p className="text-[#8a7a72]">Curates projects and resources specifically to kill each identified skill gap.</p>
          </div>

          <div className="card space-y-6 flex flex-col justify-center corner-fold" data-reveal="scale-up" data-delay="400">
            <h3 className="text-2xl">Score Simulation</h3>
            <p className="text-[#8a7a72]">See your probability of getting hired if you learn specific high-impact skills.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-32 bg-[#faf8f3]/50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-20 text-center space-y-4">
            <div className="pill" data-reveal="scale-up">Wall of Love</div>
            <h2 className="text-5xl md:text-6xl text-[#1a0a0a]" data-reveal="scale-up" data-delay="100">
              From gaps to <em className="highlight-draw">real offers.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Arjun K.", role: "ML Engineer at Google", text: "Match score was 31% initially. CareerLens found the exact PyTorch gaps they wanted." },
              { name: "Sneha R.", role: "SDE-2 at Razorpay", text: "The roadmap was surgical. I went from rejected to offer letter in 4 months." },
              { name: "Mihir S.", role: "Backend at Microsoft", text: "I didn't know System Design was my gap. This agent identified it in seconds." }
            ].map((testi, i) => (
              <div key={i} className="card testi-card space-y-6" data-reveal="fade-up" data-delay={i * 200}>
                <p className="text-xl italic text-[#1a0a0a]">"{testi.text}"</p>
                <div>
                  <div className="font-bold">{testi.name}</div>
                  <div className="text-sm text-[#8a7a72]">{testi.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison py-32 px-8 max-w-[1000px] mx-auto">
        <div className="mb-20 text-center space-y-4">
          <div className="pill" data-reveal="scale-up">The Difference</div>
          <h2 className="text-4xl md:text-5xl text-[#1a0a0a]" data-reveal="scale-up" data-delay="100">
            Why agentic intelligence?
          </h2>
        </div>

        <div className="overflow-x-auto" data-reveal="fade-up">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[#1a0a0a]">
                <th className="py-6 text-left font-syne text-sm uppercase tracking-widest text-[#8a7a72]">Feature</th>
                <th className="py-6 text-center font-syne text-sm uppercase tracking-widest text-[#8a7a72]">Traditional Databases</th>
                <th className="py-6 text-center font-syne text-sm uppercase tracking-widest text-[#c94a2a]">CareerLens Agent</th>
              </tr>
            </thead>
            <tbody>
              {[
                { f: "Data Freshness", old: "Months old (Stale)", new: "Real-time (Live Swap)" },
                { f: "Signal Source", old: "Job descriptions only", new: "Blogs, GitHub, Reddit, Forums" },
                { f: "Analysis Depth", old: "Keyword matching (ATS)", new: "Semantic skill-gap reasoning" },
                { f: "Roadmap Type", old: "Generic course links", new: "Surgical, gap-specific syllabus" },
                { f: "Accuracy", old: "approx. 45%", new: "approx. 92%" }
              ].map((row, i) => (
                <tr key={i} className="border-b border-[#e2dbd3] hover:bg-[#f5f2ec]/30 transition-colors group">
                  <td className="py-6 font-bold">{row.f}</td>
                  <td className="py-6 text-center text-[#8a7a72]">{row.old}</td>
                  <td className="py-6 text-center font-bold text-[#1a0a0a] bg-[#f5f2ec]/50 group-hover:bg-[#f5f2ec]/80 transition-colors">{row.new}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq py-32 px-8 bg-[#1a0a0a] text-white">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24">
          <div className="space-y-8" data-reveal="fade-right">
            <div className="pill-dark">Questions</div>
            <h2 className="text-5xl md:text-7xl leading-tight">Frequently <br />asked.</h2>
            <p className="text-white/40 text-xl leading-relaxed max-w-sm">
              Everything you need to know about the agent and the analysis process.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { q: "Is it really live data?", a: "Yes. When you initiate an analysis, our agents perform a real-time search across the corporate web to find the most recent hiring signals for that specific role and company." },
              { q: "How many companies do you support?", a: "We support over 2,000 top-tier tech companies and startups globally. If a company has a digital footprint, our agent can analyze it." },
              { q: "Can I use it for free?", a: "Your first deep-dive analysis is completely free. We want you to see the power of the roadmap before you commit." },
              { q: "How accurate is the gap analysis?", a: "Our models leverage semantic similarity rather than keyword matching. This means we understand if a project you did in 'FastAPI' qualifies for a 'Flask' requirement." }
            ].map((item, i) => (
              <details key={i} className="group border-b border-white/10 pb-6" data-reveal="fade-up" data-delay={i * 100}>
                <summary className="list-none flex justify-between items-center cursor-pointer py-4">
                  <h3 className="text-xl font-bold group-hover:text-[#c94a2a] transition-colors">{item.q}</h3>
                  <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-white/60 leading-relaxed pt-2 max-w-2xl">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta py-32 px-8 max-w-[1440px] mx-auto">
        <div className="card-dark p-16 grid md:grid-cols-2 gap-16 items-center relative overflow-hidden">
          <div className="space-y-8 z-10" data-reveal="fade-right">
            <h2 className="text-5xl md:text-7xl">Ready for <br />the lens?</h2>
            <p className="text-white/60 text-xl max-w-md">
              Start your first deep-dive analysis in seconds. No credit card required.
            </p>
          </div>
          
          <div className="cta-form z-10" data-reveal="fade-left">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-[#c94a2a] font-bold">Email</label>
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="input-dark"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Role</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Frontend" 
                    className="input-dark"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Target Company</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Google" 
                    className="input-dark"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>
              <Link href="/dashboard" className="btn-primary w-full py-5 mt-4">Launch My Analysis — Free</Link>
            </div>
          </div>
          <div className="cta-glow"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-24 px-8 border-t border-[#e2dbd3]">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-4 gap-16">
          <div className="space-y-6" data-reveal="fade-up">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#c94a2a]"></div>
              <span className="font-syne text-xl font-bold">CareerLens AI</span>
            </div>
            <p className="text-sm text-[#8a7a72] leading-relaxed">
              Equipping ambitious professionals with live data intelligence.
            </p>
          </div>

          {[
            { title: "Product", links: ["Features", "Dashboard", "Simulate", "Pricing"] },
            { title: "Resources", links: ["Stories", "Roadmaps", "API Docs", "Changelog"] },
            { title: "Legal", links: ["Privacy", "Terms", "Cookies", "Contact"] }
          ].map((col, i) => (
            <div key={i} className="space-y-6" data-reveal="fade-up" data-delay={i * 100}>
              <h4 className="text-xs uppercase tracking-widest font-bold">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-[#8a7a72] hover:text-[#c94a2a] transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-[1440px] mx-auto mt-24 pt-8 border-t border-[#e2dbd3] flex justify-between items-center text-[10px] uppercase tracking-widest text-[#8a7a72] font-bold">
          <div>© 2026 CareerLens AI</div>
          <div className="flex gap-8">
            <span>Status: Operational</span>
            <span>Region: Global</span>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button 
        id="backToTop" 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>

      <style jsx>{`
        @keyframes word-rise {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          to { opacity: 1; }
        }
        @keyframes visual-rise {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%     { opacity: 0.6; transform: scale(1.15); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-float-badge-tl {
          animation: float-badge 4s ease-in-out infinite;
        }
        .animate-float-badge-br {
          animation: float-badge 4s ease-in-out infinite 2s;
        }
        .cta-glow {
          position: absolute;
          width: 400px;  height: 400px;  border-radius: 50%;
          background: radial-gradient(circle, rgba(201,74,42,0.15) 0%, transparent 70%);
          top: -100px;  right: -100px;  pointer-events: none;
          animation: glow-pulse 6s ease-in-out infinite;
        }

        .highlight-draw {
          position: relative;
          display: inline;
        }
        .highlight-draw::after {
          content: "";
          position: absolute;  bottom: -3px;  left: 0;  right: 0;
          height: 3px;  background: var(--red);
          transform: scaleX(0);  transform-origin: left;
          transition: transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .revealed .highlight-draw::after {
          transform: scaleX(1);
          transition-delay: 0.4s;
        }

        .corner-fold {
          position: relative;
        }
        .corner-fold:hover::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 0 28px 28px;
          border-color: transparent transparent var(--border) transparent;
          pointer-events: none;
        }

        .testi-card::before {
          content: "";
          position: absolute;  top: -5px;  left: 50%;
          transform: translateX(-50%);
          width: 12px;  height: 12px;  border-radius: 50%;
          background: var(--red);
          box-shadow: 0 2px 6px rgba(201,74,42,0.4);
          opacity: 0;  transition: opacity 0.3s;
        }
        .testi-card:hover::before { opacity: 1; }
      `}</style>
    </div>
  );
}