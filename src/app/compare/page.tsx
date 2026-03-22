'use client';
import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useEffect } from 'react';

export default function Compare() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Form State
  const [resumeText, setResumeText] = useState('');
  const [role, setRole] = useState('');
  const [companies, setCompanies] = useState(['', '']);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [strategy, setStrategy] = useState<string>('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
        setLoading(false);
      } else {
        router.push('/');
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-surface text-on-surface">Loading...</div>;
  }

  const handleCompanyChange = (index: number, value: string) => {
    const newComps = [...companies];
    newComps[index] = value;
    setCompanies(newComps);
  };

  const handleAddCompany = () => {
    if (companies.length < 3) setCompanies([...companies, '']);
  };

  const handleCompare = async () => {
    const activeCompanies = companies.filter(c => c.trim() !== '');
    if (!resumeText || !role || activeCompanies.length < 2) return alert('Need at least 2 companies, role, and resume.');
    
    setIsAnalyzing(true);
    setResults(null);
    setStrategy('');

    try {
      const promises = activeCompanies.map(c => 
        fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ resumeText, company: c, role })
        }).then(res => res.json().then(data => ({ company: c, ...data })))
      );

      const resolved = await Promise.all(promises);
      const errors = resolved.filter(r => r.error);
      if (errors.length > 0) throw new Error(errors[0].error);

      setResults(resolved);

      // Fetch Strategy
      const stratRes = await fetch('/api/strategy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ results: resolved.map(r => ({ company: r.company, score: r.matchScore, gap: r.gapSkills, intel: r.companyIntelligence })) })
      });
      const stratData = await stratRes.json();
      setStrategy(stratData.strategy || 'Strategy could not be generated.');

    } catch (e: any) {
      alert("Error: " + e.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-[#35092c] dark:bg-[#2a0723] font-['Noto_Serif'] flex flex-col py-8 px-4 z-50 fixed inset-y-0 left-0">
        <div className="mb-12 px-2">
          <Link href="/"><h1 className="text-2xl font-black text-[#faf8f3] tracking-tight">CareerLens AI</h1></Link>
          <p className="text-[#ffdbd1] text-xs opacity-70 mt-1 font-body uppercase tracking-widest">Agentic Intelligence</p>
        </div>
        <nav className="flex-1 space-y-2">
          <Link className="flex items-center gap-3 py-3 px-4 text-[#f0eee9] opacity-80 hover:bg-[#4d1641] transition-colors" href="/dashboard">
            <span className="material-symbols-outlined shrink-0" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>upload_file</span>
            <span className="font-body text-sm">Upload</span>
          </Link>
          <Link className="flex items-center gap-3 py-3 px-4 bg-[#3d1033] border-l-4 border-[#a7330e] text-[#ffdbd1] transition-colors" href="/compare">
            <span className="material-symbols-outlined shrink-0" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>model_training</span>
            <span className="font-body text-sm">Comparison Mode</span>
          </Link>
        </nav>
        <div className="mt-auto space-y-4 px-2 pt-6 border-t border-[#4d1641]">
          <button onClick={() => signOut(auth)} className="flex items-center gap-2 w-full text-left text-[#f0eee9] opacity-60 text-xs hover:opacity-100 cursor-pointer transition-opacity">
            <span className="material-symbols-outlined shrink-0 text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>logout</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <header className="h-16 flex items-center px-8 border-b border-outline-variant/10 bg-surface-container-low">
          <h2 className="text-xl font-headline font-bold text-on-secondary-fixed tracking-tight">Market Intelligence Comparison</h2>
        </header>

        <main className="p-12 max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <h3 className="text-5xl font-headline text-on-secondary-fixed mb-4 tracking-tight">Analyze Parallel Trajectories</h3>
            <p className="text-on-surface-variant text-lg max-w-2xl">Contrast your profile across different industry benchmarks simultaneously. Our agents will pinpoint the optimal path for your specific skillset.</p>
          </div>

          <div className="grid grid-cols-12 gap-12 mb-20">
            <div className="col-span-12 lg:col-span-7 space-y-8">
              <section className="bg-surface-container-low p-10 border border-outline-variant/10 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/20"></div>
                <h4 className="text-xl font-headline font-bold text-on-secondary-fixed mb-8">Career Context</h4>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Target Role</label>
                    <input value={role} onChange={e => setRole(e.target.value)} className="w-full bg-surface-container-lowest border border-outline-variant/30 py-4 px-4 focus:ring-2 focus:ring-primary/20" placeholder="e.g., Lead AI Engineer" type="text"/>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Your Resume</label>
                    <textarea value={resumeText} onChange={e => setResumeText(e.target.value)} className="w-full h-40 bg-surface-container-lowest border border-outline-variant/30 py-4 px-4 focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Paste your resume content here..."></textarea>
                  </div>
                </div>
              </section>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <section className="bg-surface-container p-10 border border-outline-variant/10 shadow-lg h-full">
                <h4 className="text-xl font-headline font-bold text-on-secondary-fixed mb-8">Target Benchmarks</h4>
                <div className="space-y-4">
                  {companies.map((c, idx) => (
                    <div key={idx} className="relative">
                      <input value={c} onChange={e => handleCompanyChange(idx, e.target.value)} className="w-full bg-surface-container-lowest border border-outline-variant/30 py-4 px-4 pr-12" placeholder={`Company ${idx + 1}`} type="text"/>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>apartment</span>
                    </div>
                  ))}
                  {companies.length < 3 && (
                    <button onClick={handleAddCompany} className="text-primary text-sm font-bold hover:underline flex items-center gap-2 mt-4">
                      <span className="material-symbols-outlined text-sm">add</span> Add Another Benchmark
                    </button>
                  )}
                </div>
                <div className="mt-12">
                  <button onClick={handleCompare} disabled={isAnalyzing} className="w-full bg-primary text-on-primary py-5 rounded-md font-bold text-lg shadow-lg hover:opacity-90 transition-all flex justify-center items-center gap-3">
                    {isAnalyzing ? 'Analyzing Parallel Streams...' : 'Execute Comparison'}
                    {!isAnalyzing && <span className="material-symbols-outlined">compare_arrows</span>}
                  </button>
                </div>
              </section>
            </div>
          </div>

          {results && (
            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {results.map((res: any, idx: number) => (
                  <div key={idx} className="bg-surface-container-low p-8 border border-outline-variant/10 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                    <div className={`absolute top-0 right-0 w-12 h-12 flex items-center justify-center text-white font-bold text-sm ${res.matchScore >= 70 ? 'bg-green-600' : res.matchScore >= 40 ? 'bg-yellow-600' : 'bg-red-600'}`}>
                      {res.matchScore}%
                    </div>
                    <h5 className="text-2xl font-black font-headline text-on-secondary-fixed mb-6">{res.company}</h5>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-8 italic">"{res.matchReasoning}"</p>
                    <div className="space-y-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">Core Gap</p>
                      <div className="bg-surface-container-lowest p-4 border border-outline-variant/10 rounded">
                        <p className="text-sm font-medium">{res.gapSkills && res.gapSkills.length > 0 ? res.gapSkills[0] : 'No critical gaps'}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {strategy && (
                <section className="bg-on-secondary-fixed text-surface p-12 shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 text-primary text-sm font-bold uppercase tracking-[0.2em] mb-6">
                      <span className="w-3 h-3 bg-primary rounded-full pulse-coral"></span>
                      Strategic Verdict
                    </div>
                    <h4 className="text-3xl font-headline font-bold mb-6">Agentic Recommendation</h4>
                    <p className="text-xl text-primary-fixed/80 leading-relaxed max-w-4xl italic">"{strategy}"</p>
                  </div>
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
                </section>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
