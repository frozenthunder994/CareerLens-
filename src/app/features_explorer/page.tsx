import Link from 'next/link';

export default function FeaturesExplorer() {
  return (
    <>
      
{/*  SideNavBar Integration  */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-[#35092c] dark:bg-stone-950 flex flex-col p-6 z-50 shadow-[20px_0_40px_rgba(53,9,44,0.08)]">
<div className="text-lg font-['Noto_Serif'] text-white mb-8">Editorial Architect</div>
<nav className="flex-1 space-y-2">
{/*  Active: Projects (Matches "Features/Projects" Explorer intent)  */}
<a className="flex items-center gap-3 text-stone-400 hover:text-white px-4 py-2 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-['Inter'] text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 bg-[#a7330e] text-white rounded-md px-4 py-2 border-l-4 border-[#ffdbd1] transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="architecture">architecture</span>
<span className="font-['Inter'] text-sm font-medium">Projects</span>
</a>
<a className="flex items-center gap-3 text-stone-400 hover:text-white px-4 py-2 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span className="font-['Inter'] text-sm font-medium">Analytics</span>
</a>
<a className="flex items-center gap-3 text-stone-400 hover:text-white px-4 py-2 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-['Inter'] text-sm font-medium">Team</span>
</a>
<a className="flex items-center gap-3 text-stone-400 hover:text-white px-4 py-2 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-['Inter'] text-sm font-medium">Settings</span>
</a>
</nav>
<div className="mt-auto pt-6 border-t border-white/10">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-[10px] text-white font-bold">EA</div>
<div>
<p className="text-white text-xs font-bold uppercase tracking-tight">Premium Edition</p>
<p className="text-stone-400 text-[10px]">User Profile</p>
</div>
</div>
<button className="w-full py-2 px-4 bg-primary text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                New Project
            </button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="ml-64 min-h-screen bg-surface">
{/*  Top Navigation Anchor  */}
<header className="sticky top-0 w-full z-40 bg-surface/80 backdrop-blur-md px-12 py-6 flex justify-between items-center">
<div>
<span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase block mb-1">Explorer</span>
<h1 className="font-headline text-3xl font-bold text-on-secondary-fixed -tracking-tight">Feature Blueprints</h1>
</div>
<div className="flex gap-6 items-center">
<button className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Documentation</button>
<button className="bg-surface-container-highest px-5 py-2 rounded-md text-sm font-medium text-on-surface hover:bg-surface-container-high transition-colors">
                    Share Workspace
                </button>
</div>
</header>
<section className="px-12 py-8 max-w-7xl mx-auto">
{/*  Feature Explorer Layout  */}
<div className="flex flex-col lg:flex-row gap-12">
{/*  Left-side Navigation for Features  */}
<div className="w-full lg:w-72 shrink-0 space-y-8">
<div>
<span className="text-[11px] font-bold tracking-[0.2em] text-on-surface-variant/60 uppercase block mb-4">Core Capabilities</span>
<nav className="space-y-1">
<button className="w-full flex justify-between items-center group px-4 py-3 bg-surface-container-low rounded-lg text-left">
<span className="text-sm font-semibold text-on-secondary-fixed">System Architecture</span>
<span className="material-symbols-outlined text-primary text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="w-full flex justify-between items-center group px-4 py-3 hover:bg-surface-container-low rounded-lg text-left transition-colors">
<span className="text-sm font-medium text-on-surface-variant">Editorial Workflow</span>
<span className="material-symbols-outlined text-on-surface-variant/20 group-hover:text-primary text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="w-full flex justify-between items-center group px-4 py-3 hover:bg-surface-container-low rounded-lg text-left transition-colors">
<span className="text-sm font-medium text-on-surface-variant">Data Topography</span>
<span className="material-symbols-outlined text-on-surface-variant/20 group-hover:text-primary text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="w-full flex justify-between items-center group px-4 py-3 hover:bg-surface-container-low rounded-lg text-left transition-colors">
<span className="text-sm font-medium text-on-surface-variant">Asset Synthesis</span>
<span className="material-symbols-outlined text-on-surface-variant/20 group-hover:text-primary text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</nav>
</div>
<div className="p-6 bg-on-secondary-fixed text-white rounded-xl relative overflow-hidden">
{/*  Decorative Geometric Square  */}
<div className="absolute top-0 right-0 w-4 h-4 bg-primary"></div>
<h4 className="font-headline italic text-lg mb-2">Need a Custom Blueprint?</h4>
<p className="text-xs text-stone-400 mb-4 leading-relaxed">Our architects can help you scale your editorial system.</p>
<button className="text-xs font-bold tracking-widest uppercase border-b border-primary pb-1 hover:text-primary transition-colors">Talk to Sales</button>
</div>
</div>
{/*  Main Content Area: Feature Details  */}
<div className="flex-1 space-y-16">
{/*  Feature Section 1  */}
<section className="relative">
<div className="absolute -left-4 top-0 w-1 h-12 bg-primary"></div>
<span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase block mb-4">SYSTEM ARCHITECTURE</span>
<h2 className="font-headline text-4xl text-on-secondary-fixed mb-6 leading-tight">Structural Integrity for Digital Narratives</h2>
<p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mb-10">
                            The backbone of every project is defined by a flexible schema that allows for multi-dimensional content relationships. No more rigid hierarchies.
                        </p>
{/*  High-Fidelity Visual Element: Browser Mockup  */}
<div className="relative group">
{/*  Geometric Accents  */}
<div className="absolute -top-2 -left-2 w-3 h-3 bg-tertiary"></div>
<div className="absolute -bottom-2 -right-2 w-3 h-3 bg-primary"></div>
<div className="bg-surface-container-high rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
<div className="h-8 bg-surface-container-highest flex items-center px-4 gap-1.5 border-b border-surface-variant/30">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/40"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/40"></div>
</div>
<div className="aspect-video relative overflow-hidden">
<img alt="System Architecture Interface" className="w-full h-full object-cover grayscale contrast-125" data-alt="Abstract architectural schematic showing nodes and connectors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhlFh9Hm2yoECTLaUpbEBljUSBM24T-OWZXEvjlELORIUN_SH9sM1u0ol86NmJEUhoXmH208jS2ghVDLNf1eaG03RwaDOjkjttL2whHdbFKVttNdok_uKyomeL1bsxvwP4g2sFjvKFUHXGxYnyFXtyVPbNv2fLjLWJFfAkvhzXxIfHolm94I_5esU0zSIvfg0uJZ_k0PP1fJ5Zz09shfaNk0LTTmqWzWB2QYv3k1yPdGym-HBf0TS-Y0TJpTkJjrH9sKhuOTDBfELE"/>
<div className="absolute inset-0 bg-on-secondary-fixed/40 flex items-center justify-center">
<div className="grid grid-cols-3 gap-4 w-4/5">
<div className="h-32 bg-surface-container-lowest/10 backdrop-blur-md rounded border border-white/20 p-4 flex flex-col justify-end">
<span className="text-[8px] font-bold text-white tracking-widest uppercase mb-1">Input Node</span>
<div className="h-1 w-8 bg-primary"></div>
</div>
<div className="h-32 bg-surface-container-lowest/10 backdrop-blur-md rounded border border-white/20 p-4 flex flex-col justify-end">
<span className="text-[8px] font-bold text-white tracking-widest uppercase mb-1">Process Core</span>
<div className="h-1 w-12 bg-tertiary"></div>
</div>
<div className="h-32 bg-surface-container-lowest/10 backdrop-blur-md rounded border border-white/20 p-4 flex flex-col justify-end">
<span className="text-[8px] font-bold text-white tracking-widest uppercase mb-1">Distribution</span>
<div className="h-1 w-6 bg-secondary"></div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Step-through Details  */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h5 className="text-sm font-bold text-on-secondary-fixed mb-2">01. Define Foundations</h5>
<p className="text-xs text-on-surface-variant leading-relaxed">Establish core entities and their relationship parameters using our visual graph builder.</p>
</div>
<div>
<h5 className="text-sm font-bold text-on-secondary-fixed mb-2">02. Map Interactions</h5>
<p className="text-xs text-on-surface-variant leading-relaxed">Configure triggers and automated responses that govern how data moves across your ecosystem.</p>
</div>
<div>
<h5 className="text-sm font-bold text-on-secondary-fixed mb-2">03. Optimize Output</h5>
<p className="text-xs text-on-surface-variant leading-relaxed">Refine final delivery formats through high-fidelity preview modes before deployment.</p>
</div>
</div>
</section>
{/*  Feature Section 2 (Data Focus)  */}
<section className="pt-16 border-t border-surface-container">
<span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase block mb-4">DATA TOPOGRAPHY</span>
<div className="flex flex-col lg:flex-row gap-12 items-center">
<div className="flex-1">
<h2 className="font-headline text-3xl text-on-secondary-fixed mb-6 italic">Visualizing Intellectual Real Estate</h2>
<p className="text-on-surface-variant text-base leading-relaxed mb-8">
                                    Understand the flow and density of your information. Our heatmap technology identifies content clusters and reveals unseen connections between disparate data points.
                                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
<p className="text-sm text-on-surface font-medium">Multi-dimensional clustering analysis</p>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-tertiary mt-1.5"></div>
<p className="text-sm text-on-surface font-medium">Real-time collaboration metadata</p>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></div>
<p className="text-sm text-on-surface font-medium">Automated semantic tagging</p>
</li>
</ul>
</div>
{/*  Bento Grid Visuals  */}
<div className="flex-1 grid grid-cols-2 gap-4 w-full">
<div className="col-span-2 bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
<div className="flex justify-between items-end mb-8">
<span className="text-[10px] font-bold tracking-widest uppercase">Global Activity</span>
<span className="text-2xl font-headline italic">94.2%</span>
</div>
<div className="flex items-end gap-1 h-24">
<div className="w-full bg-primary/20 h-1/2"></div>
<div className="w-full bg-primary/40 h-3/4"></div>
<div className="w-full bg-primary/60 h-2/3"></div>
<div className="w-full bg-primary h-full"></div>
<div className="w-full bg-primary/80 h-4/5"></div>
<div className="w-full bg-primary/50 h-1/2"></div>
</div>
</div>
<div className="bg-on-secondary-fixed p-6 rounded-xl flex flex-col justify-between">
<div className="w-6 h-6 bg-tertiary"></div>
<p className="text-white font-headline italic text-lg mt-4">Growth Radius</p>
</div>
<div className="bg-surface-container-highest p-6 rounded-xl">
<div className="flex gap-1 mb-2">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<div className="w-2 h-2 rounded-full bg-secondary/40"></div>
<div className="w-2 h-2 rounded-full bg-secondary/20"></div>
</div>
<p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-tight">Active Nodes</p>
<p className="text-2xl font-headline text-on-secondary-fixed">1,204</p>
</div>
</div>
</div>
</section>
</div>
</div>
</section>
{/*  Footer Integration  */}
<footer className="mt-24 bg-[#3D1033] dark:bg-black w-full py-12 px-12 flex flex-col md:flex-row justify-between items-center text-xs tracking-wide uppercase font-['Inter']">
<div className="text-white font-['Noto_Serif'] italic text-lg mb-6 md:mb-0">Editorial Architect</div>
<div className="flex gap-8 mb-6 md:mb-0">
<a className="text-stone-400 hover:text-[#a7330e] transition-colors" href="#">Privacy Policy</a>
<a className="text-stone-400 hover:text-[#a7330e] transition-colors" href="#">Terms of Service</a>
<a className="text-stone-400 hover:text-[#a7330e] transition-colors" href="#">Contact</a>
<a className="text-white hover:text-[#a7330e] transition-colors" href="#">Journal</a>
</div>
<p className="text-stone-400">© 2024 Editorial Architect. All rights reserved.</p>
</footer>
</main>

    </>
  );
}