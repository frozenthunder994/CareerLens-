'use client';

import React from 'react';

export default function BackgroundSystem() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Element 2 — Yellow Sticky Note (top-right) */}
      <div className="scrap-sticky1">
        📌 todo:<br />
        — learn DSA<br />
        — mock interviews<br />
        — system design<br />
        — apply Google!
      </div>

      {/* Element 2 — Green Sticky Note (mid-left) */}
      <div className="scrap-sticky2">
        ✓ Python<br />
        ✓ React<br />
        ✗ PyTorch<br />
        ✗ LLD<br />
        → fix gaps
      </div>

      {/* Element 3 — Decorative Concentric Rings */}
      <div className="ring ring-1"></div>
      <div className="ring ring-2"></div>
      <div className="ring ring-3"></div>

      {/* Element 4 — Floating Code Snippet */}
      <div className="floating-code">
{`def analyze_resume(pdf):
  skills = extract_skills(pdf)
  gaps = compute_gap(
    skills, target_role
  )
  return roadmap(gaps)

match_score = 47  # → 91%
weeks_to_ready = 24`}
      </div>

      {/* Element 5 — Floating Math Formula */}
      <div className="floating-formula">
{`match(u,r) = Σ wᵢ · sim(sᵢ, rᵢ)
             i=1..n

∂score/∂skill > 0.3 → priority
roadmap ← sort(gaps, priority)`}
      </div>

      {/* Element 6 — Horizontal Pencil Rules */}
      <div className="bg-rule bg-rule1"></div>
      <div className="bg-rule bg-rule2"></div>
    </div>
  );
}
