import Link from "next/link";
import { ArrowRight, MapPin, Mail, Sparkles, Building2, Quote, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story — KALNET: Built for Indian Education",
  description: "KALNET is the digital backbone for schools and colleges in India. Founded by Rishav Raj. Headquartered in Hyderabad.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32 border-b border-slate-200">
          <div className="absolute top-0 right-0 -mt-24 -mr-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 -mb-24 -ml-24 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl opacity-50" />
          
          <div className="container relative z-10 text-center">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
                  <Building2 className="h-4 w-4" />
                  Rooted in Hyderabad · Built for India
              </div>
              <h1 className="mx-auto max-w-4xl font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
                  Software that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Finally Fits.</span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-xl text-slate-600 md:text-2xl leading-relaxed">
                  KALNET wasn't born in a Silicon Valley boardroom. It was built in a Hyderabad classroom, solving the real-world fragmentation of Indian institutional management.
              </p>
          </div>
      </section>

      {/* Main Story Content */}
      <section className="bg-white py-24">
        <div className="container max-w-4xl">
          <div className="space-y-12 text-lg leading-relaxed text-slate-600 md:text-xl">
            <div className="relative p-8 md:p-12 bg-slate-50 rounded-[2.5rem] border border-slate-100 italic font-medium text-slate-900 shadow-inner group transition-transform hover:-rotate-1">
               <Quote className="absolute -top-6 -left-6 h-12 w-12 text-primary/20" />
               "Indian schools run on heroic effort—registers, spreadsheets, and the principal's memory. We built KALNET to turn that effort into institutional intelligence."
            </div>
            
            <div className="space-y-8">
              <p>
                We spent months sitting with principals and watching how they actually run their day. We saw the chaos of manual signature chasing and the noise of hundreds of parent WhatsApp messages.
              </p>
              <p>
                KALNET replaces that patchwork with one simple, secure platform: the <span className="font-bold text-slate-900 underline decoration-blue-500/30 underline-offset-4">Approval Engine</span> for every digital signature, the <span className="font-bold text-slate-900 underline decoration-indigo-500/30 underline-offset-4">Student Portal</span> for parents, and the <span className="font-bold text-slate-900 underline decoration-emerald-500/30 underline-offset-4">Admin Dashboard</span> for leadership.
              </p>
              <div className="grid md:grid-cols-2 gap-8 py-8">
                  <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-2">Our Philosophy</h4>
                      <p className="text-sm">We believe software should bend to the institution, not the other way around. Every workflow in KALNET is built for the Indian ground reality.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-2">Our Promise</h4>
                      <p className="text-sm">Pricing in Rupees, support on WhatsApp, and training that lasts an afternoon—not a week. We respect the educator's time.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                          <Sparkles className="h-4 w-4" />
                          Founder & Visionary
                      </div>
                      <h2 className="font-display text-4xl font-extrabold text-slate-900 tracking-tight md:text-5xl">Rishav Raj</h2>
                      <p className="text-lg font-medium text-slate-500 italic">CTO & Co-Founder, KALNET</p>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                      Rishav leads the engineering and product vision at KALNET. He works directly with principals in pilot schools and personally runs every demo for our new partners. His vision is to democratize institutional intelligence for every school in India.
                  </p>
                  <div className="flex flex-wrap gap-4">
                      <Button asChild size="lg" className="bg-primary text-white hover:opacity-90 rounded-xl h-12 px-8 shadow-lg shadow-primary/20">
                          <Link href="/demo">Book a Demo with Rishav</Link>
                      </Button>
                      <Button variant="outline" className="rounded-xl border-slate-200 group h-12 bg-white px-8" asChild>
                          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                              <Linkedin className="h-5 w-5 mr-2 group-hover:text-blue-600 transition-colors" />
                              LinkedIn
                          </a>
                      </Button>
                  </div>
              </div>
              
              <div className="w-full md:w-80">
                  <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-slate-200 to-slate-300 shadow-inner border border-slate-100 relative overflow-hidden group">
                       {/* Placeholder for actual photo */}
                       <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-xl group-hover:scale-110 transition-transform">
                          Rishav Raj
                       </div>
                  </div>
              </div>
          </div>

          {/* Contact Info Cards */}
          <div className="mt-20 grid gap-6 sm:grid-cols-2">
            <div className="flex items-center gap-6 rounded-[2rem] border border-white bg-white p-8 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg tracking-tight">Institutional Hub</p>
                <p className="text-slate-500 font-medium">Hyderabad, Telangana, India</p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-[2rem] border border-white bg-white p-8 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg tracking-tight">Direct Enquiries</p>
                <a href="mailto:hello@kalnet.co" className="text-primary font-bold hover:underline">
                  hello@kalnet.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-24 md:py-32 text-center text-white relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-[600px] w-[600px] bg-primary/20 blur-[120px] rounded-full" />
          
          <div className="container relative z-10 space-y-10">
              <h2 className="mx-auto max-w-4xl font-display text-4xl font-extrabold tracking-tight md:text-6xl">
                  Ready to Join the <span className="italic text-primary">Inner Circle?</span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-slate-400">
                  See why forward-thinking institutions choose KALNET to be their digital pulse.
              </p>
              <div className="flex justify-center pt-4">
                  <Button asChild size="lg" className="bg-primary text-white hover:opacity-90 h-16 px-12 text-xl font-bold rounded-2xl shadow-xl shadow-primary/30">
                      <Link href="/demo">Request a Consultation</Link>
                  </Button>
              </div>
          </div>
      </section>
    </>
  );
}
