"use client";

import React, { useEffect } from 'react';
import Script from 'next/script';
import { 
  Calendar, 
  MessageSquare, 
  Settings, 
  ChevronRight, 
  CheckCircle2, 
  Building2, 
  Phone, 
  Mail,
  Zap,
  Globe
} from 'lucide-react';

/**
 * KALNET "Book a Demo" Page - Next.js 14 Definitive Version
 * 
 * Features:
 * - Smooth scroll navigation
 * - Next/Script optimized Calendly loading
 * - Responsive 3-step walkthrough
 * - Premium Tailwind Design (Vercel/Linear influenced)
 */

export default function BookDemoPage() {
  
  const scrollToCalendly = () => {
    const element = document.getElementById('calendly-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      title: "Understand your school's needs",
      desc: "Our institutional experts learn about your specific current processes and daily bottlenecks.",
      icon: <Building2 className="w-6 h-6 text-teal-600" />,
      color: "blue"
    },
    {
      title: "Live product walkthrough",
      desc: "See how KALNET builds a digital backbone for your institution in real-time.",
      icon: <Zap className="w-6 h-6 text-teal-600" />,
      color: "indigo"
    },
    {
      title: "Q&A + onboarding plan",
      desc: "Get all your technical questions answered and a clear implementation roadmap.",
      icon: <Settings className="w-6 h-6 text-teal-600" />,
      color: "emerald"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />

      {/* --- Sticky Navbar --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">K</div>
            <span className="text-xl font-bold tracking-tight">KALNET</span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-semibold text-slate-600">
            <a href="#" className="hover:text-teal-600 transition-colors">Product</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Pricing</a>
            <a href="#" className="hover:text-teal-600 transition-colors">About</a>
            <button 
              onClick={scrollToCalendly}
              className="px-6 py-2.5 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all shadow-md shadow-teal-600/20 active:scale-95"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </nav>

      {/* --- SECTION 1: HERO --- */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-teal-500/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-6 text-center max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-[0.2em]">
            Institutional Grade Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">Free Demo</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            See how KALNET helps schools and colleges manage operations efficiently and move toward data-driven growth.
          </p>
          <div className="pt-6">
            <button 
              onClick={scrollToCalendly}
              className="inline-flex items-center gap-3 px-10 py-5 bg-teal-600 text-white rounded-full text-lg font-bold hover:shadow-xl hover:shadow-teal-600/30 transition-all tracking-tight group"
            >
              Secure My Slot <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: CALENDLY EMBED --- */}
      <section id="calendly-section" className="py-20 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-200 overflow-hidden">
             {/* Terminal Header */}
             <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3" /> Encrypted Session
                </span>
             </div>
             
             {/* The Widget */}
             <div 
               className="calendly-inline-widget min-w-[320px] h-[700px] w-full" 
               data-url="https://calendly.com/acmesales?hide_gdpr_banner=1" 
             />
          </div>
        </div>
      </section>

      {/* --- SECTION 3: WHAT HAPPENS IN THE DEMO? --- */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">What happens in the demo?</h2>
            <p className="text-lg text-slate-500">Transparent steps to digital excellence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-teal-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: TRUST SECTION --- */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl text-center space-y-10">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center justify-center gap-3">
             <div className="h-px w-8 bg-slate-200" />
             Trusted by schools across India
             <div className="h-px w-8 bg-slate-200" />
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale contrast-125">
             {/* Logo placeholders - Using Lucide Icons for high-fidelity placeholders */}
             <div className="flex items-center gap-2"><Globe className="w-8 h-8" /><span className="font-bold text-xl">Global Academy</span></div>
             <div className="flex items-center gap-2"><Building2 className="w-8 h-8" /><span className="font-bold text-xl">Mount Saint Institution</span></div>
             <div className="flex items-center gap-2"><CheckCircle2 className="w-8 h-8" /><span className="font-bold text-xl">Standard High</span></div>
             <div className="flex items-center gap-2"><Zap className="w-8 h-8" /><span className="font-bold text-xl">Spark College</span></div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: FINAL CTA --- */}
      <section className="py-24 md:py-40 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl space-y-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Ready to simplify your school management?
          </h2>
          <button 
            onClick={scrollToCalendly}
            className="inline-flex items-center gap-3 px-10 py-5 bg-teal-600 text-white rounded-full text-xl font-bold hover:shadow-xl hover:shadow-teal-600/30 transition-all active:scale-95 group"
          >
            Start Your Journey <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-6 max-w-7xl grid gap-16 md:grid-cols-4">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">K</div>
                <span className="text-xl font-bold tracking-tight">KALNET</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              The digital backbone for Indian schools and colleges. Built to move institutional management beyond paper and WhatsApp.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-slate-200">Resources</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-teal-400">Documentation</a></li>
                <li><a href="#" className="hover:text-teal-400">Customer Stories</a></li>
                <li><a href="#" className="hover:text-teal-400">Pricing Models</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-slate-200">Support</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@kalnet.co</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (+91) 9988776655</li>
                <li><a href="#" className="hover:text-teal-400">Help Centre</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 max-w-7xl mt-20 pt-8 border-t border-white/5 text-slate-600 text-xs flex justify-between">
           <p>© 2026 KALNET Technologies. Built for Bharath.</p>
           <div className="flex gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
