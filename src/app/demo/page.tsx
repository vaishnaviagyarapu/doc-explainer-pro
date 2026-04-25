"use client";

import { useEffect } from "react";
import { 
  Calendar, 
  MessageSquare, 
  Settings, 
  ChevronRight, 
  CheckCircle2, 
  Building2, 
  Zap,
  Globe,
  Mail,
  Phone,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Script from "next/script";

export default function DemoPage() {
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
      icon: <Building2 className="h-6 w-6 text-teal-600" />,
    },
    {
      title: "Live product walkthrough",
      desc: "See how KALNET builds a digital backbone for your institution in real-time.",
      icon: <Zap className="h-6 w-6 text-teal-600" />,
    },
    {
      title: "Q&A + onboarding plan",
      desc: "Get all your technical questions answered and a clear implementation roadmap.",
      icon: <Settings className="h-6 w-6 text-teal-600" />,
    }
  ];

  return (
    <>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js"
        onLoad={() => {
          const Calendly = (window as any).Calendly;
          if (Calendly) {
            Calendly.initInlineWidget({
              url: 'https://calendly.com/aagyarapuvaishnavi/new-meeting?hide_gdpr_banner=1',
              parentElement: document.getElementById('calendly-widget-container'),
            });
          }
        }}
      />

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
                <div className="pt-6">
                    <Button 
                        size="lg" 
                        onClick={scrollToCalendly}
                        className="bg-teal-600 text-white rounded-full px-10 py-7 text-lg font-bold hover:shadow-xl hover:shadow-teal-600/30 transition-all active:scale-95 group"
                    >
                        Secure My Slot <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>

        {/* --- SECTION 2: CALENDLY EMBED --- */}
        <section id="calendly-section" className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-200 overflow-hidden">
                    {/* Terminal-style Header */}
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
                        id="calendly-widget-container"
                        className="w-full" 
                        style={{ minWidth: '320px', height: '700px' }}
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
                    <span className="h-px w-8 bg-slate-200" />
                    Trusted by schools across India
                    <span className="h-px w-8 bg-slate-200" />
                </p>
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale contrast-125">
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
                <Button 
                    size="lg"
                    onClick={scrollToCalendly}
                    className="bg-teal-600 text-white rounded-full px-12 py-8 text-xl font-bold hover:shadow-xl hover:shadow-teal-600/30 transition-all active:scale-95 group"
                >
                    Start Your Journey <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
            </div>
        </section>
      </div>
    </>
  );
}
