"use client";

import React from 'react';
import { 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Zap, 
  Settings,
  Globe,
  ChevronRight,
  Mail,
  Phone
} from 'lucide-react';

/**
 * KALNET "Book a Demo" Page - Definitive Zero-Error Version
 * 
 * DESIGN PHILOSOPHY:
 * Since local development environments (localhost) can block third-party iframes,
 * this version uses a high-fidelity "Mock Calendar" UI that never refuses to connect.
 * It provides a premium, interactive experience and links to the real booking link.
 */

export default function BookDemoPage() {
  
  const steps = [
    {
      title: "Understand your school's needs",
      desc: "Our institutional experts learn about your specific current processes and daily bottlenecks.",
      icon: <Building2 className="w-6 h-6 text-teal-600" />,
    },
    {
      title: "Live product walkthrough",
      desc: "See how KALNET builds a digital backbone for your institution in real-time.",
      icon: <Zap className="w-6 h-6 text-teal-600" />,
    },
    {
      title: "Q&A + onboarding plan",
      desc: "Get all your technical questions answered and a clear implementation roadmap.",
      icon: <Settings className="h-6 w-6 text-teal-600" />,
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pt-16">
      
      {/* --- SECTION 1: HERO --- */}
      <section className="py-20 md:py-32 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-teal-500/5 blur-[120px] rounded-full -z-10" />
          <div className="container mx-auto px-6 max-w-4xl space-y-8">
              <div className="mx-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-[0.2em]">
                  Institutional Grade Platform
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">Free Demo</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                  Select a time for your institutional walkthrough.
              </p>
          </div>
      </section>

      {/* --- SECTION 2: FIXED PREMIUM UI (NO IFRAME ERRORS) --- */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-6 max-w-5xl">
              <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-200 overflow-hidden flex flex-col md:flex-row">
                  {/* Left Side: Info */}
                  <div className="md:w-1/3 p-10 border-r border-slate-100 bg-slate-50/50">
                      <div className="w-12 h-12 bg-teal-600 rounded-xl mb-6 flex items-center justify-center text-white font-bold text-xl">K</div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">KALNET Demo</h2>
                      <p className="text-slate-500 text-sm mb-8 font-medium">30 mins · Video Call</p>
                      
                      <div className="space-y-6 text-sm text-slate-600">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"><Globe className="w-4 h-4 text-slate-400" /></div>
                            <span>IST (India Time)</span>
                          </div>
                           <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0"><CheckCircle2 className="w-4 h-4 text-teal-500" /></div>
                            <span className="leading-relaxed font-medium">A live walkthrough of the digital backbone for your institution.</span>
                          </div>
                      </div>
                  </div>

                  {/* Right Side: Interactive Mock Calendar */}
                  <div className="flex-1 p-10 flex flex-col items-center justify-center space-y-10">
                      <div className="w-full space-y-6 text-center">
                          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Select Date & Time</h3>
                          
                          <div className="grid grid-cols-7 gap-2 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm mx-auto max-w-sm">
                              {/* Empty header for days of week mock */}
                              {['M','T','W','T','F','S','S'].map(d => (
                                <div key={d} className="w-8 h-8 text-[10px] font-bold text-slate-400 flex items-center justify-center">{d}</div>
                              ))}
                              {/* Mock Days */}
                              {[...Array(31)].map((_, i) => (
                                  <button 
                                    key={i} 
                                    className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${i === 14 ? 'bg-teal-600 text-white shadow-lg scale-110' : 'hover:bg-teal-50 text-slate-800'}`}
                                  >
                                      {i + 1}
                                  </button>
                              ))}
                          </div>
                      </div>

                      <button 
                          className="bg-teal-600 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-xl shadow-teal-600/30 w-full hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-3"
                          onClick={() => window.open('https://calendly.com/acmesales', '_blank')}
                      >
                          Confirm & Book Now <ArrowRight className="w-6 h-6 border-2 border-white rounded-full p-0.5" />
                      </button>
                      
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-teal-500" /> Secure Institutional Gateway
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* --- SECTION 3: STEPS --- */}
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
                          className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl transition-all hover:shadow-2xl hover:border-teal-200"
                      >
                          <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-8">
                              {step.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                          <p className="text-slate-500 leading-relaxed text-lg">{step.desc}</p>
                      </div>
                  ))}
              </div>
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
                      The digital backbone for Indian institutions.
                  </p>
              </div>
              <div className="space-y-6">
                  <h4 className="font-bold text-slate-200 uppercase tracking-widest text-xs">Support</h4>
                  <ul className="space-y-4 text-slate-500 text-sm">
                      <li className="flex items-center gap-2 font-medium"><Mail className="w-4 h-4 text-teal-400" /> hello@kalnet.co</li>
                      <li className="flex items-center gap-2 font-medium"><Phone className="w-4 h-4 text-teal-400" /> (+91) 9988776655</li>
                  </ul>
              </div>
          </div>
      </footer>
    </div>
  );
}
