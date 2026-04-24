import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles, HelpCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tiers = [
  {
    name: "Standard Pilot",
    price: "8,000",
    cadence: "/month",
    blurb: "Perfect for a single branch exploring digital transition.",
    cta: "Start 2-Month Pilot",
    features: [
      "Up to 500 students",
      "All 3 Core Modules",
      "Email + WhatsApp Support",
      "No long-term commitment",
    ],
    highlighted: false,
    color: "slate",
  },
  {
    name: "Institutional Annual",
    price: "5,000",
    cadence: "/month, billed annually",
    blurb: "Optimized for schools scaling digital across all branches.",
    cta: "Scale Your Institution",
    features: [
      "Unlimited students & staff",
      "Priority Implementation Support",
      "Custom Workflow Automation",
      "Board-Ready Analytics Dashboard",
      "Dedicated Onboarding Success Manager",
    ],
    highlighted: true,
    color: "primary",
  },
];

const faqs = [
  {
    q: "Are these prices in Indian Rupees?",
    a: "Yes. All KALNET pricing is transparently listed in ₹ (INR) and includes GST. We never hide costs or bill in foreign currencies.",
  },
  {
    q: "What does the 2-week pilot include?",
    a: "You get unrestricted access to the complete platform—all three modules—for a single branch. We provide hands-on setup and stay connected via WhatsApp throughout the pilot.",
  },
  {
    q: "Is there any installation required?",
    a: "None. KALNET is a cloud-native platform that runs securely in any modern browser. No hardware upgrades or local servers needed.",
  },
  {
    q: "How secure is our institutional data?",
    a: "Your data is stored exclusively on servers located in India, ensuring full compliance with local regulations and providing maximum security the way regulators expect.",
  },
  {
    q: "Can we migrate data from our current ERP?",
    a: "Absolutely. We specialize in migrating schools from Excel, legacy ERPs, and local systems. Our team handles the data migration at no additional cost as part of onboarding.",
  },
];

const Pricing = () => (
  <>
    <Seo
      title="Pricing — KALNET School Management Software"
      description="Simple ₹-based pricing. Pilot at ₹8,000/month or Annual at ₹5,000/month. All modules included."
      path="/pricing"
    />

    {/* Hero Section */}
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-32 border-b border-slate-200 text-center">
      <div className="absolute top-0 right-0 -mt-24 -mr-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl opacity-50" />
      
      <div className="container relative z-10">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
          <ShieldCheck className="h-4 w-4" />
          Transparent Pricing · Hosted in India
        </div>
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
          Simple Pricing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">No Surprises.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600 md:text-xl leading-relaxed">
          One flat price for all modules. No per-student fees, no dollar conversions, and definitely no hidden maintenance costs.
        </p>
      </div>
    </section>

    {/* Pricing Cards */}
    <section className="bg-white py-24">
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-center">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`group relative flex flex-col rounded-[2.5rem] p-10 transition-all duration-500 border ${
                t.highlighted
                  ? "bg-slate-900 text-white border-slate-800 shadow-2xl scale-105 z-10"
                  : "bg-white text-slate-900 border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2"
              }`}
            >
              {t.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-gradient-cta px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-lg">
                  <Sparkles className="h-3.5 w-3.5" />
                  Recommended for Institutions
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`font-display text-2xl font-bold ${t.highlighted ? "text-white" : "text-slate-900"}`}>{t.name}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${t.highlighted ? "text-slate-400" : "text-slate-500"}`}>{t.blurb}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-2">
                <span className="font-display text-6xl font-extrabold tracking-tight">₹{t.price}</span>
                <span className={`text-sm font-medium ${t.highlighted ? "text-slate-400" : "text-slate-500"}`}>{t.cadence}</span>
              </div>

              <Button
                asChild
                size="lg"
                className={`w-full h-14 rounded-2xl text-lg font-bold transition-all ${
                  t.highlighted
                    ? "bg-primary hover:opacity-90 shadow-lg shadow-primary/20"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                <Link to="/demo">
                  {t.cta} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <div className="my-10 h-px w-full bg-slate-800/10" />

              <ul className="space-y-4">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-4">
                    <div className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${t.highlighted ? "bg-primary/20 text-primary" : "bg-blue-50 text-blue-600"}`}>
                      <Check className="h-4 w-4" />
                    </div>
                    <span className={`text-sm font-medium ${t.highlighted ? "text-slate-300" : "text-slate-700"}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Currency Note */}
        <div className="mt-16 text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-6 py-2 text-sm font-medium text-slate-500">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                All prices are in INR (₹) and include 18% GST. No cross-border transaction fees.
            </p>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="bg-slate-50 py-24 border-t border-slate-200">
      <div className="container max-w-4xl">
        <div className="text-center mb-16 space-y-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm mb-2">
                <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-slate-900 tracking-tight md:text-5xl">
                Common Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Everything you need to know about our pricing and onboarding process.
            </p>
        </div>

        <div className="rounded-[2.5rem] bg-white p-8 md:p-12 shadow-xl border border-slate-100">
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-slate-100 last:border-0 py-2">
                <AccordionTrigger className="text-left font-display text-lg font-bold text-slate-800 hover:no-underline hover:text-primary transition-colors">
                    {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pt-2 pb-6">
                    {f.a}
                </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </div>

        {/* Support CTA */}
        <div className="mt-16 text-center space-y-6">
            <p className="text-slate-600">Still have questions? Our founders are ready to help.</p>
            <div className="flex justify-center gap-4">
                <Button variant="outline" className="rounded-xl border-slate-200 h-12 px-8 text-slate-700 bg-white" asChild>
                    <a href="mailto:hello@kalnet.co">Email Founders</a>
                </Button>
                <Button className="rounded-xl bg-slate-900 hover:bg-slate-800 h-12 px-8 text-white" asChild>
                   <Link to="/demo">Talk to our team</Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  </>
);

export default Pricing;