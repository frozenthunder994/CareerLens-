'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import Link from 'next/link';

export default function PricingPage() {
  useReveal();

  const plans = [
    {
      name: "Free",
      price: "₹0",
      desc: "Perfect for casual exploration.",
      features: [
        "1 analysis/week",
        "Resume parsing",
        "Live fetch (3/week)",
        "Gap analysis",
        "Basic roadmap (no weeks)"
      ],
      btn: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "₹499",
      period: "/month",
      desc: "For serious career pivots.",
      features: [
        "Unlimited analyses",
        "Week-by-week roadmap",
        "Simulation mode",
        "Fetch comparison (3 sites)",
        "PDF export"
      ],
      btn: "Start 7-Day Trial",
      popular: true
    },
    {
      name: "Team",
      price: "₹2,999",
      period: "/month",
      desc: "For placement coordinators.",
      features: [
        "Up to 50 students",
        "Cohort gap analysis",
        "Placement dashboard",
        "Company readiness reports",
        "White-label roadmaps"
      ],
      btn: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="pricing-page pt-32 pb-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="mb-20 text-center space-y-4">
          <div className="pill" data-reveal="scale-up">Price Performance</div>
          <h1 className="text-6xl md:text-8xl leading-tight text-[#1a0a0a]" data-reveal="scale-up" data-delay="100">
            Surgical <br /><em className="highlight-draw">Investment.</em>
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch mb-32">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`card flex flex-col justify-between p-12 transition-all duration-500 relative ${p.popular ? 'border-[#c94a2a] ring-1 ring-[#c94a2a] scale-105 z-10' : ''}`}
              data-reveal="fade-up"
              data-delay={i * 100}
            >
              {p.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c94a2a] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-syne font-extrabold">{p.price}</span>
                    {p.period && <span className="text-[#8a7a72] font-medium">{p.period}</span>}
                  </div>
                  <p className="text-[#8a7a72] leading-relaxed">{p.desc}</p>
                </div>
                <ul className="space-y-4">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-[#1a0a0a]">
                      <span className="text-[#c94a2a]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                href={p.name === "Team" ? "mailto:sales@careerlens.ai" : "/signup"} 
                className={`btn-primary w-full mt-12 py-5 no-underline ${!p.popular ? 'bg-[#1a0a0a] hover:bg-[#2d1515]' : ''}`}
              >
                {p.btn}
              </Link>
            </div>
          ))}
        </div>

        {/* Global Currency Note */}
        <div className="text-center text-[#8a7a72] text-sm" data-reveal="fade-up">
          * Regional pricing available. Secure payment via Stripe.
        </div>
      </div>
    </div>
  );
}
