"use client";

import Script from "next/script";

export default function BookDemoPage() {
  const steps = [
    {
      number: "01",
      title: "Understand your school's needs",
      desc: "Our institutional experts learn about your specific current processes and daily bottlenecks.",
    },
    {
      number: "02",
      title: "Live product walkthrough",
      desc: "See how KALNET builds a digital backbone for your institution in real-time.",
    },
    {
      number: "03",
      title: "Q&A + onboarding plan",
      desc: "Get all your technical questions answered and a clear implementation roadmap.",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-24">
      
      {/* Header Section */}
      <section className="pt-24 pb-12 text-center px-6">
        <div className="container mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Book a Demo
          </h1>
          <p className="text-lg md:text-xl text-slate-500">
            Select a time below to see how we can transform your operations.
          </p>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="px-6 mb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div 
                id="calendly-widget-container"
                className="w-full" 
                style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </section>

      {/* What happens in the demo? Section */}
      <section className="px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What happens in the demo?
            </h2>
            <p className="text-slate-500 text-lg">
              A transparent, guided process to digital excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl font-black text-slate-200 mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}
