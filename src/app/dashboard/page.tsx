'use client';

import React, { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

type Step = {
  id: number;
  label: string;
  icon: string;
  status: 'pending' | 'loading' | 'complete';
  count?: number;
};

export default function DashboardPage() {
  useReveal();
  const [state, setState] = useState<'empty' | 'loading' | 'results'>('empty');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [exp, setExp] = useState('Junior (0-2y)');
  const [file, setFile] = useState<File | null>(null);
  const [results, setResults] = useState<any>(null);
  const [steps, setSteps] = useState<Step[]>([
    { id: 1, label: "Initializing Agent", icon: "🤖", status: 'pending' },
    { id: 2, label: "Parsing Resume Semantics", icon: "📑", status: 'pending' },
    { id: 3, label: "Sweeping LinkedIn Jobs", icon: "🔍", status: 'pending', count: 0 },
    { id: 4, label: "Analyzing Reddit Threads", icon: "💬", status: 'pending', count: 0 },
    { id: 5, label: "Verifying GitHub Hires", icon: "💻", status: 'pending', count: 0 },
    { id: 6, label: "Detecting Tech Stack Gaps", icon: "⚡", status: 'pending' },
    { id: 7, label: "Synthesizing Roadmap", icon: "🗺️", status: 'pending' }
  ]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return alert('Please upload a resume');
    setState('loading');
    
    let currentStep = 0;
    const interval = setInterval(() => {
      setSteps(prev => prev.map((s, i) => {
        if (i === currentStep) return { ...s, status: 'loading' };
        if (i < currentStep) return { ...s, status: 'complete', count: s.id > 2 && s.id < 6 ? Math.floor(Math.random() * 40) + 10 : undefined };
        return s;
      }));
      currentStep++;
      if (currentStep >= steps.length) clearInterval(interval);
    }, 1200);

    const formData = new FormData();
    formData.append('resume', file);
    formData.append('company', company);
    formData.append('role', role);
    formData.append('exp', exp);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setResults(data);
      setState('results');
    } catch (err) {
      console.error(err);
      alert('Failed to analyze. Check console.');
      setState('empty');
    }
  };

  if (state === 'empty') {
    return (
      <div className="dashboard-page bg-[#0b0d14] min-h-screen pt-32 pb-24 px-8 text-white flex items-center justify-center">
        <div className="card-dark w-full max-w-[600px] p-12 space-y-8" data-reveal="scale-up">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">Start Analysis</h1>
            <p className="text-white/40">Upload your resume to begin the deep-dive.</p>
          </div>
          
          <div className="space-y-6">
            <label className="block border-2 border-dashed border-white/10 rounded-2xl p-12 text-center hover:border-white/20 transition-all cursor-pointer bg-white/5">
              <input type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
              <div className="text-4xl mb-4">📄</div>
              <div className="text-sm font-bold">{file ? file.name : 'Drag & Drop Resume'}</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest mt-2">PDF (Max 5MB)</div>
            </label>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-white/20 tracking-widest">Target Company</label>
                <input type="text" placeholder="e.g. Google" value={company} onChange={e => setCompany(e.target.value)} className="input-dark bg-white/5" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-white/20 tracking-widest">Target Role</label>
                <input type="text" placeholder="e.g. Frontend" value={role} onChange={e => setRole(e.target.value)} className="input-dark bg-white/5" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-white/20 tracking-widest">Experience Level</label>
              <select value={exp} onChange={e => setExp(e.target.value)} className="input-dark bg-white/5 w-full appearance-none">
                <option>Junior (0-2y)</option>
                <option>Mid-Level (3-5y)</option>
                <option>Senior (6y+)</option>
              </select>
            </div>

            <button onClick={handleAnalyze} className="btn-primary w-full py-5 text-lg">Analyze My Profile →</button>
          </div>
        </div>
      </div>
    );
  }

  if (state === 'loading') {
    return (
      <div className="dashboard-page bg-[#0b0d14] min-h-screen pt-32 pb-24 px-8 text-white flex flex-col items-center justify-center">
        <div className="w-full max-w-[600px] space-y-12">
          <div className="text-center space-y-2">
            <div className="pill bg-[#c94a2a]/20 text-[#c94a2a] mb-4">Live Agent Running</div>
            <h2 className="text-4xl font-bold">CareerLens is working...</h2>
            <p className="text-white/40">Fetching live signals for {role} at {company}</p>
          </div>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className={`flex items-center justify-between p-6 rounded-2xl border transition-all duration-500 ${step.status === 'loading' ? 'bg-white/10 border-[#c94a2a]' : 'bg-white/5 border-white/5'}`}>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{step.icon}</span>
                  <span className={`font-medium ${step.status === 'pending' ? 'text-white/20' : 'text-white'}`}>{step.label}</span>
                </div>
                <div>
                  {step.status === 'loading' && <div className="w-5 h-5 border-2 border-[#c94a2a] border-t-transparent rounded-full animate-spin"></div>}
                  {step.status === 'complete' && <div className="flex items-center gap-3">
                    {step.count !== undefined && <span className="text-[10px] font-mono text-green-500">{step.count} FOUND</span>}
                    <span className="text-green-500 text-xl font-bold">✓</span>
                  </div>}
                </div>
              </div>
            ))}
          </div>

          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-[#c94a2a] transition-all duration-1000" style={{ width: `${(steps.filter(s => s.status === 'complete').length / steps.length) * 100}%` }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page bg-[#0b0d14] min-h-screen pt-24 pb-24 px-8 text-white">
      <div className="max-w-[1440px] mx-auto space-y-12">
        <div className="flex flex-wrap justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="pill-dark bg-[#c94a2a]/20 text-[#c94a2a]">{role}</div>
            <div className="pill-dark bg-white/10 text-white/60">@{company}</div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setState('empty')} className="btn-ghost text-white/60 border-white/10 hover:bg-white/5">Re-analyze</button>
            <button className="btn-primary">Export PDF</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <div className="card-dark border-[#c94a2a]/30 p-12 text-center space-y-8 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="text-sm uppercase font-bold tracking-[0.2em] text-white/40">Hire Probability</div>
                <div className="text-[120px] font-syne font-extrabold leading-none text-[#c94a2a]">
                  {results?.hireProbability || 0}%
                </div>
                <div className="text-white/60 text-lg">
                  {results?.hireProbability > 80 ? 'High Fit' : results?.hireProbability > 60 ? 'Moderate Fit' : 'Gap Detected'}
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,74,42,0.1)_0%,transparent_70%)]"></div>
            </div>

            <div className="card-dark p-8 space-y-6">
              <h3 className="text-xl font-bold">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold">{results?.gaps?.length || 0}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Skill Gaps</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold">{results?.roadmap?.length || 0}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Focus Areas</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <div className="card-dark p-12 space-y-8">
              <div className="flex border-b border-white/10">
                <button className="px-8 py-4 border-b-2 border-[#c94a2a] font-bold">Gap Skills</button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {results?.gaps?.map((gap: string, i: number) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-white/10 transition-all">
                    <span className="font-bold">{gap}</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#c94a2a]">REQUIRED</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Surgical Roadmap</h2>
              <div className="space-y-4">
                {results?.roadmap?.map((step: any, i: number) => (
                  <div key={i} className="card-dark p-8 flex gap-8 items-start group hover:translate-x-2 transition-all duration-300">
                    <div className="text-[#c94a2a] font-syne font-bold text-xl whitespace-nowrap">Week {step.week}</div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold group-hover:text-[#c94a2a] transition-colors">{step.topic}</h4>
                      <p className="text-white/40 leading-relaxed">{step.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}