"use client";

import Link from "next/link";
import { Check, ArrowRight, Sparkles, HelpCircle, ShieldCheck, Zap, Globe, MessageSquare, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Metadata cannot be in a client component, so we move it or use a separate layout.
// Since this is page.tsx and I'm adding "use client", I'll remove the metadata export 
// and the user can add it to a layout.tsx if they need it for SEO.

const tiers = [
  {
    name: "Pilot Plan",
    price: "8,000",
    cadence: "/month",
    description: "Perfect for exploring digital transformation with zero long-term commitment.",
    cta: "Start Your Pilot",
    features: [
      "Full access to 3 Core Modules",
      "Up to 500 Students included",
      "Standard Email Support",
      "Hand-held Onboarding",
      "No setup or hidden fees"
    ],
    highlighted: false,
    badge: "Trial Ready",
  },
  {
    name: "Annual Plan",
    price: "5,000",
    cadence: "/month, billed annually",
    description: "Our most popular choice for institutions scaling excellence across all branches.",
    cta: "Get Started Now",
    features: [
      "Unlimited Students & Staff",
      "Priority WhatsApp Support",
      "Custom Workflow Automation",
      "Board-Ready Analytics",
      "Dedicated Success Manager"
    ],
    highlighted: true,
    badge: "Most Popular",
  },
];

const faqs = [
  {
    q: "Is there any hidden setup or implementation fee?",
    a: "None at all. We believe in transparent pricing. The monthly fee you see is all you pay—it includes hosting, maintenance, and all core features without any surprises.",
  },
  {
    q: "Can we migrate our existing student data?",
    a: "Yes! Our team handles the entire data migration process from your legacy ERP or Excel sheets at no extra cost, ensuring a smooth transition for your staff.",
  },
  {
    q: "What kind of support do you provide?",
    a: "Pilot users receive dedicated email support. Annual plan members get priority WhatsApp support and a dedicated Success Manager to ensure the platform scales with your needs.",
  },
  {
    q: "Is staff training included in the pricing?",
    a: "Absolutely. We provide comprehensive remote training sessions for your teachers and administrative staff as part of the onboarding process for both plans.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#6366f1]/10 via-[#a855f7]/5 to-transparent opacity-40" />
        </div>
        
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium animate-in fade-in slide-in-from-bottom-2 duration-700">
              <Sparkles className="h-4 w-4" />
              <span>Transparent INR Pricing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 font-display">
              Simple plans for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">every institution.</span>
            </h1>
            <p className="text-lg text-slate-600 md:text-xl leading-relaxed">
              Scale your school's digital presence with a flat-fee model. No per-student charges, no hidden costs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-24 -mt-12">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 group border shadow-sm hover:shadow-2xl hover:-translate-y-1 ${
                  tier.highlighted
                    ? "bg-slate-900 text-white border-slate-800 ring-1 ring-white/10"
                    : "bg-white text-slate-900 border-slate-100"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg z-20">
                    {tier.badge}
                  </div>
                )}
                
                {!tier.highlighted && tier.badge && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-slate-100 rounded-full text-xs font-bold uppercase tracking-wider text-slate-600 border border-slate-200 z-20">
                    {tier.badge}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold font-display">{tier.name}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${tier.highlighted ? "text-slate-400" : "text-slate-500"}`}>
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl font-extrabold tracking-tight">Rs.{tier.price}</span>
                  <span className={`text-sm font-medium ${tier.highlighted ? "text-slate-400" : "text-slate-500"}`}>
                    {tier.cadence}
                  </span>
                </div>

                <Button
                  asChild
                  size="lg"
                  className={`w-full h-14 rounded-2xl text-lg font-bold group/btn ${
                    tier.highlighted
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white border-none"
                      : "bg-slate-900 hover:bg-slate-800 text-white border-none"
                  }`}
                >
                  <Link href="/demo">
                    {tier.cta} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>

                <div className={`my-10 h-px w-full ${tier.highlighted ? "bg-white/10" : "bg-slate-100"}`} />

                <ul className="space-y-5 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4">
                      <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        tier.highlighted ? "bg-indigo-500/20 text-indigo-400" : "bg-emerald-50 text-emerald-600"
                      }`}>
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </div>
                      <span className={`text-[15px] font-medium leading-tight ${tier.highlighted ? "text-slate-300" : "text-slate-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-indigo-500" />
              <span className="text-sm font-medium">Bank-grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-indigo-500" />
              <span className="text-sm font-medium">Hosted in India</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-indigo-500" />
              <span className="text-sm font-medium">24/7 Priority Support</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-indigo-500" />
              <span className="text-sm font-medium">Free Staff Training</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 mb-2">
              <HelpCircle className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about our pricing and onboarding.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-slate-100">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-slate-100 py-2 first:pt-0 last:border-0">
                  <AccordionTrigger className="text-left font-display text-lg font-bold text-slate-800 hover:no-underline hover:text-indigo-600 transition-colors py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 p-8 bg-indigo-600 rounded-[2rem] text-center text-white space-y-6">
            <h3 className="text-2xl font-bold font-display">Still have questions?</h3>
            <p className="text-indigo-100 max-w-xl mx-auto">
              Our experts are ready to help you find the best plan for your institution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-xl px-8" asChild>
                <Link href="/demo">Talk to an Expert</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-indigo-400 text-white hover:bg-indigo-700 rounded-xl px-8" asChild>
                <a href="mailto:hello@kalnet.co">Email Support</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <footer className="py-12 bg-white text-center">
        <p className="text-slate-400 text-sm">
          All prices are in INR and inclusive of 18% GST.
        </p>
      </footer>
    </div>
  );
}
