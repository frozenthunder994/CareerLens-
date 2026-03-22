import Link from 'next/link';

export default function Security() {
  return (
    <>
      
{/*  Top Navigation Bar  */}
<nav className="fixed top-0 w-full z-50 bg-[#FAF8F3] dark:bg-stone-900 font-['Noto_Serif'] antialiased tracking-tight">
<div className="flex justify-between items-center px-8 py-4 w-full max-w-[1440px] mx-auto">
<div className="text-xl font-bold text-[#35092c] dark:text-stone-100">Architectural SaaS</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-[#59413b] dark:text-stone-400 hover:text-[#35092c] transition-opacity hover:opacity-80" href="#">Platform</a>
<a className="text-[#a7330e] font-semibold border-b-2 border-[#a7330e] pb-1 transition-opacity hover:opacity-80" href="#">Solutions</a>
<a className="text-[#59413b] dark:text-stone-400 hover:text-[#35092c] transition-opacity hover:opacity-80" href="#">Resources</a>
<a className="text-[#59413b] dark:text-stone-400 hover:text-[#35092c] transition-opacity hover:opacity-80" href="#">Pricing</a>
</div>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-medium scale-95 active:scale-90 duration-150 hover:opacity-90">
                Get Started
            </button>
</div>
</nav>
<main className="pt-24">
{/*  Hero Section  */}
<section className="relative overflow-hidden px-8 py-24 md:py-32 bg-surface">
<div className="max-w-[1440px] mx-auto relative z-10">
<div className="max-w-3xl">
<span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container text-xs font-semibold tracking-widest uppercase mb-6 rounded-sm">Enterprise Security</span>
<h1 className="text-6xl md:text-8xl font-bold text-on-secondary-fixed leading-none tracking-tighter mb-8 italic">
                        Trust &amp; Connectivity
                    </h1>
<p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
                        Architecture requires precision; security demands certainty. We've built a foundation that exceeds global standards so you can design without compromise.
                    </p>
</div>
</div>
{/*  Decorative Accent  */}
<div className="absolute top-24 right-8 w-16 h-16 border-t-4 border-r-4 border-primary opacity-20 hidden md:block"></div>
</section>
{/*  Security Section  */}
<section className="px-8 py-24 bg-surface-container-low">
<div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16">
{/*  Left Headline  */}
<div className="lg:w-1/3">
<h2 className="text-4xl font-bold text-on-secondary-fixed mb-6">Rigorous Protection for High-Stakes Data</h2>
<p className="text-on-surface-variant mb-8">Every blueprint and integration is shielded by our multi-layered defense architecture, designed for the modern editorial firm.</p>
<div className="p-6 bg-surface-container-highest border-l-4 border-primary">
<p className="italic font-serif text-lg text-on-secondary-fixed">"Our commitment to security is woven into the very fabric of our structural code."</p>
<p className="mt-4 text-sm font-bold uppercase tracking-widest">— Head of Infrastructure</p>
</div>
</div>
{/*  Right Feature Cards  */}
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Card 1  */}
<div className="relative bg-[#FAF8F3] p-8 group overflow-hidden">
<div className="absolute top-0 right-0 w-4 h-4 bg-primary"></div>
<span className="material-symbols-outlined text-primary text-4xl mb-4" data-icon="verified_user">verified_user</span>
<h3 className="text-xl font-bold text-on-secondary-fixed mb-2">SOC 2 Type II</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Independently audited controls that ensure your data remains confidential and accessible at all times.</p>
</div>
{/*  Card 2  */}
<div className="relative bg-[#FAF8F3] p-8 group overflow-hidden">
<div className="absolute top-0 right-0 w-4 h-4 bg-tertiary"></div>
<span className="material-symbols-outlined text-tertiary text-4xl mb-4" data-icon="vpn_key">vpn_key</span>
<h3 className="text-xl font-bold text-on-secondary-fixed mb-2">SAML SSO</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Streamline access and improve security with enterprise-grade identity management integration.</p>
</div>
{/*  Card 3  */}
<div className="relative bg-[#FAF8F3] p-8 group overflow-hidden">
<div className="absolute bottom-0 left-0 w-4 h-4 bg-primary"></div>
<span className="material-symbols-outlined text-primary text-4xl mb-4" data-icon="enhanced_encryption">enhanced_encryption</span>
<h3 className="text-xl font-bold text-on-secondary-fixed mb-2">Data Encryption</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">AES-256 encryption at rest and TLS 1.3 in transit ensures your intellectual property is untouchable.</p>
</div>
{/*  Card 4  */}
<div className="relative bg-[#FAF8F3] p-8 group overflow-hidden">
<div className="absolute bottom-0 left-0 w-4 h-4 bg-tertiary"></div>
<span className="material-symbols-outlined text-tertiary text-4xl mb-4" data-icon="privacy_tip">privacy_tip</span>
<h3 className="text-xl font-bold text-on-secondary-fixed mb-2">GDPR Compliant</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Global privacy standards baked into our platform to protect your users across every continent.</p>
</div>
</div>
</div>
</section>
{/*  Full-Width Integration Strip  */}
<section className="bg-[#3D1033] py-20 overflow-hidden">
<div className="max-w-[1440px] mx-auto px-8">
<div className="flex flex-col items-center mb-12">
<h2 className="text-white text-3xl text-center italic mb-4">Seamless Ecosystem</h2>
<div className="h-px w-24 bg-primary"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-70 hover:opacity-100 transition-opacity">
<div className="flex justify-center">
<img alt="" className="h-8 grayscale invert brightness-200" data-alt="Slack logo in monochrome white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSRSX3zf4Y7Um5279IRRh2gUAjS1k1lW0iurfpG_7PDzu7lymwhrQv7ak166Oecha4vF9WLXsnI35HDY7lluN1mlrKY4ebAlAYkdIHqsaPJA28Nwc4ONRZ8G27OKDR4knpn8SP8yfVsQ3bncjP-Ogy3EMlfwXwFNyL4B1mKygAV1-zIHxIk-u_aiGMGudGefjyuD0eilr9piJ1Pi9U6NKzeSY21V4Eg3ZXRQZ22XxWDbwLa2dlukKjhzW_Zr45Bqc1xI56aISdg2uO"/>
</div>
<div className="flex justify-center">
<img alt="" className="h-8 grayscale invert brightness-200" data-alt="Github logo in monochrome white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJzS8igItbhL5br797-4vGmwX4RLNPTB4LYxxjHz5OSvKGFCo7gxfNk7WTp2BOPbvueuovvNSTuYHPSR_t4DsfHDUg1TAhSqzfdIEYe2cLicxwseuMc3_oPKOiVXRURAh3eMh1oZNH3bNayTFhpV6YvK33s9sx99drlOO-pRDqbgVez9qvhFiCj3nJzvG9fwHWYebXl5sR7OKU4xm2PP8d01lXnrCMeWJFP88saZDozM_ruLUeU93RtvebUp8HPSuD4rwJlYF2jMJJ"/>
</div>
<div className="flex justify-center">
<img alt="" className="h-8 grayscale invert brightness-200" data-alt="Figma logo in monochrome white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvMEwKd8_K7Hr8xqB-wnBh7GczTxWT_aYooXW5vk70zA4pRcHLUx9On4zY_sc1ncKffL3VKvUMCwRHjXuAsEOC78DOQ0l59YIFmJWr_dnReJq5f0dq_syoAhUNTYVo9o3gItSRYKUVTVzMFYmV-G_eI4US7W0wteL407TwiHFZvieEXrCS2QQzLLMyxLI4YJjanRhKsUa5g874MBuxrR-Tjsn1RwIZkCY-fBsvzC-2FiVtU3gt1Es-_eRPzlw4LcZLD3dG48Hgbg9_"/>
</div>
<div className="flex justify-center">
<img alt="" className="h-8 grayscale invert brightness-200" data-alt="Google Cloud logo in monochrome white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdgeMnHqwvjTYWj4TJ7O-nIzgbPTP94b5mleLCDn18LA53nZAy0HmAhJ3YRCfdBq9G75yuj4kS6iYcJpX19VIx2QKpsw70CZAKQWrIloZansT6vMDSGMdwkmN2faH4nDfUfPWBoqgEE0wi5HFsEzjnD5f38bmvEaD2ZxOxwC5krxv_ea4MfkxvCWYTzGumo3TZP8l7LgmMaHummM0iKWt_1_B2Y9jmE0LwCSaAdbZz3fNiqibdT9SU77DUmKAxpZKHqKRBeKmvWktu"/>
</div>
<div className="flex justify-center">
<img alt="" className="h-8 grayscale invert brightness-200" data-alt="Adobe logo in monochrome white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgE6zhAdVpFGfsgylo0fvTbhXU1gx_1PRq05OGWwhCN23R9bclyE5Ltb4STJSff59fj0nGKy3_9UcwNTmbwnuSA2Sx2N9IyebigJIy_BWAsHgLizXH7QNEkCCc7ERLr8xbYHABxVVDD63nGDpLG5ariU7XLAZmKvhhcs9KIiheN2JV0pZ_77h7TL0J34MFfvWgl4bChch1L5jIxyLwf0y69tJvhrsLlgJ-2vAkx95Y_-8-DyGMQT34iJy46Dghio36y6IJM-GAY89w"/>
</div>
<div className="flex justify-center">
<img alt="" className="h-8 grayscale invert brightness-200" data-alt="LinkedIn logo in monochrome white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiCwNxCcfLgn4nS-V6kgmfRz8-fjXseBv2Q39sXikfFHygwtH2Ja7aLsWbquQXKD1ccLQ9RQ1pl_xgU11EmRmmsn5saF_n6U95z8tjZU6zVpIDu5a63AetdiS2vBoUtBWkEJDr2M0A9vpej9GdZr2fN_Yy2Bp3AeWt0Q2OA9DoBT-WSFaZbhkwVfWPSQRThQ-M4cickHXfX04uFphxgOdULRDp_s2CY7ygbJprIgZmHHfhdrJdn3Itto_M_OGlk4uy4YY89ZVmEvaZ"/>
</div>
</div>
</div>
</section>
{/*  Connectivity Bento Grid  */}
<section className="px-8 py-24 bg-surface">
<div className="max-w-[1440px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/*  Big Card  */}
<div className="md:col-span-8 bg-surface-container border border-outline-variant/20 p-12 flex flex-col justify-between">
<div>
<h3 className="text-3xl font-bold text-on-secondary-fixed mb-4 italic">The API Marketplace</h3>
<p className="text-on-surface-variant max-w-md">Connect your existing BIM software, project management tools, and financial suites through our robust, documented API ecosystem.</p>
</div>
<div className="mt-12 flex flex-wrap gap-4">
<span className="px-4 py-2 bg-surface-container-lowest text-on-surface text-xs font-bold uppercase tracking-widest border border-primary/20">Webhooks</span>
<span className="px-4 py-2 bg-surface-container-lowest text-on-surface text-xs font-bold uppercase tracking-widest border border-primary/20">RESTful SDK</span>
<span className="px-4 py-2 bg-surface-container-lowest text-on-surface text-xs font-bold uppercase tracking-widest border border-primary/20">Custom Nodes</span>
</div>
</div>
{/*  Small Side Card  */}
<div className="md:col-span-4 bg-tertiary p-12 text-white flex flex-col justify-center text-center">
<span className="material-symbols-outlined text-6xl mb-6" data-icon="cable">cable</span>
<h4 className="text-2xl font-bold mb-4">One-Click Setup</h4>
<p className="text-white/80 text-sm">Most integrations take less than 60 seconds to authenticate and sync.</p>
<button className="mt-8 py-3 border border-white text-white font-bold hover:bg-white hover:text-tertiary transition-colors">View Library</button>
</div>
{/*  Bottom Long Card  */}
<div className="md:col-span-12 bg-on-secondary-fixed p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex gap-4 items-center">
<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-icon="support_agent">support_agent</span>
</div>
<div>
<h4 className="text-xl font-bold">Need a custom integration?</h4>
<p className="text-white/60">Our architecture team helps enterprise partners build custom bridges.</p>
</div>
</div>
<a className="text-primary-fixed-dim font-bold border-b-2 border-primary-fixed-dim pb-1 hover:text-white hover:border-white transition-all" href="#">Talk to Integration Support</a>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-[#3D1033] dark:bg-black w-full py-12 px-8 font-['Inter'] text-xs tracking-wide uppercase">
<div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1440px] mx-auto">
<div className="text-white font-['Noto_Serif'] italic text-lg mb-8 md:mb-0">Editorial Architect</div>
<div className="flex gap-8 mb-8 md:mb-0">
<a className="text-stone-400 hover:text-[#a7330e] transition-colors" href="#">Privacy Policy</a>
<a className="text-stone-400 hover:text-[#a7330e] transition-colors" href="#">Terms of Service</a>
<a className="text-stone-400 hover:text-[#a7330e] transition-colors" href="#">Contact</a>
<a className="text-stone-400 hover:text-[#a7330e] transition-colors" href="#">Journal</a>
</div>
<div className="text-stone-400">
                © 2024 Editorial Architect. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}