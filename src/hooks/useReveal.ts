'use client';

import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
        }
      });
    }, { threshold: 0.12 });

    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach(el => revealObserver.observe(el));

    // Cleanup
    return () => {
      elements.forEach(el => revealObserver.unobserve(el));
    };
  }, []);
}
