import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ClipboardCheck, GraduationCap, LayoutDashboard, ShieldCheck, Sparkles, Zap, Users2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";

const features = [
  {
    icon: ClipboardCheck,
    title: "Intelligent Approvals",
    desc: "Leave requests, fees, and transfers — every approval is routed, tracked, and digitally signed in one secure loop.",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    hoverBg: "group-hover:bg-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Unified Student Portal",
    desc: "Real-time attendance, grades, and fee tracking. One login for students and parents to stay connected 24/7.",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    hoverBg: "group-hover:bg-indigo-600",
  },
  {
    icon: LayoutDashboard,
    title: "Principal's Dashboard",
    desc: "A singular command center for the institution: enrolment, dues, staff loads, and schedules at your fingertips.",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    hoverBg: "group-hover:bg-emerald-600",
  },
];

const schools = ["Delhi Public", "St. Mary's", "Bhavan's", "Kendriya Vidyalaya", "Narayana", "Chinmaya"];

const Index = () => (
  <>
    <Seo
      title="KALNET — The Digital Backbone for Schools and Colleges"
      description="School management software built for Indian principals. Unified approvals, student portal, and admin dashboard. Book a free 30-minute demo."
      path="/"
    />

    {/* Hero Section */}
    <section className="relative overflow-hidden bg-slate-50 pt-24 pb-32 md:pt-32 md:pb-40 border-b border-slate-200">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl opacity-60" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-5xl text-center space-y-8">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <Sparkles className="h-4 w-4" />
            Designed for Indian Institutions
          </div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl">
            The Digital Backbone for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Modern Institutions.
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl text-slate-600 md:text-2xl leading-relaxed">
            Approvals, portals, and dashboards — one platform to run your entire institution. 
            Replace fragmented legacy systems with a singular, secure backbone.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-primary text-white shadow-xl shadow-primary/20 hover:opacity-90 h-14 px-10 text-lg font-bold rounded-2xl">
              <Link to="/demo">
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-bold rounded-2xl border-slate-200 text-slate-700 bg-white shadow-sm">
              <Link to="/pricing">Explore Pricing</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-10 pt-4 opacity-70">
            <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium text-slate-500">2-week pilot</span>
            </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium text-slate-500">No CC Required</span>
            </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium text-slate-500">Local Support</span>
            </div>
          </div>
        </div>

        {/* Floating Product UI Chrome */}
        <div className="relative mx-auto mt-24 max-w-5xl group">
             <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-tr from-primary to-blue-400 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
             <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50/80 px-6 py-4">
                    <div className="flex gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-slate-300" />
                        <span className="h-3 w-3 rounded-full bg-slate-300" />
                        <span className="h-3 w-3 rounded-full bg-slate-300" />
                    </div>
                    <span className="ml-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">dashboard.kalnet.co</span>
                </div>
                <div className="grid gap-6 p-8 sm:grid-cols-3">
                    {[
                        { l: "Attendance Overview", v: "94.8%", s: "Healthy", c: "emerald" },
                        { l: "Pending Approvals", v: "08", s: "Urgent", c: "rose" },
                        { l: "Revenue Snapshot", v: "₹12.4L", s: "Quarterly", c: "blue" },
                    ].map((k) => (
                        <div key={k.l} className="group relative rounded-2xl border border-slate-50 bg-slate-50/50 p-6 transition-all hover:bg-white hover:shadow-md">
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{k.l}</p>
                            <p className="mt-3 font-display text-3xl font-extrabold text-slate-900">{k.v}</p>
                            <div className="mt-3 inline-flex items-center rounded-full bg-white px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 shadow-sm">
                                <span className={`mr-1.5 h-1.5 w-1.5 rounded-full bg-${k.c}-500`} />
                                {k.s}
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </div>
      </div>
    </section>

    {/* Trusted By Section */}
    <section className="bg-white py-16 border-b border-slate-100">
      <div className="container">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-10">
          The Backbone for India's Leading Institutions
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
          {schools.map((s) => (
            <div key={s} className="font-display text-xl font-bold text-slate-400 grayscale hover:grayscale-0 transition-all cursor-default">
                {s}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Modules Section */}
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Complete Digital Ecosystem
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
             Three powerful modules. One unified identity. Zero friction.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3 px-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-3xl border border-white bg-white/70 backdrop-blur-sm p-10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-slate-100"
            >
              <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${f.bgColor} ${f.textColor} ${f.hoverBg} group-hover:text-white transition-all duration-300`}>
                <f.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900">{f.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values / Why KALNET */}
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container grid gap-20 lg:grid-cols-2 lg:items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Institutions built for the <span className="text-primary italic">Next Century.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              We didn't just build software. We built a philosophy for institutional growth that prioritizes transparency and speed.
            </p>
          </div>
          <div className="grid gap-6">
            {[
              { icon: Shield, title: "Data Sovereignty", desc: "Your data stays in India, period." },
              { icon: Users2, title: "Community Centric", desc: "Designed with feedback from 500+ educators." },
              { icon: Zap, title: "Lightning Onboarding", desc: "Live in weeks, not months. No specialized training." }
            ].map((v) => (
                <div key={v.title} className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-900 border border-slate-100">
                        <v.icon className="h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">{v.title}</h4>
                        <p className="text-slate-600 text-sm mt-1">{v.desc}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl transform rotate-3" />
            <div className="relative rounded-[2.5rem] border border-slate-100 bg-slate-50 p-12 shadow-inner">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Institutional Impact</p>
                        <p className="text-3xl font-extrabold text-slate-900">Reduced Administrative Overhead by 60%</p>
                    </div>
                    <p className="text-slate-600 leading-relaxed italic">
                        "KALNET transformed how our principal interacts with data. We moved from chasing spreadsheets to leading with insights."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-slate-200" />
                        <div>
                            <p className="font-bold text-slate-900">Dr. Aravind Hegde</p>
                            <p className="text-sm text-slate-500">Director, Institutional Excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="bg-slate-900 py-32 text-center text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-primary/20 blur-[120px] rounded-full" />
      
      <div className="container relative z-10 space-y-10">
        <h2 className="mx-auto max-w-4xl font-display text-5xl font-extrabold tracking-tight md:text-7xl">
          The future of your institution starts <span className="italic underline decoration-primary underline-offset-8">here.</span>
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-slate-400">
          Book your 30-minute consultation and see the platform that's powering the leaders of Indian education.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
             <Button asChild size="lg" className="bg-primary text-white hover:opacity-90 h-16 px-12 text-xl font-bold rounded-2xl shadow-2xl shadow-primary/40">
                <Link to="/demo">Book Your Demo</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="h-16 px-12 text-xl font-bold rounded-2xl hover:bg-white/5 border border-white/10">
                <Link to="/pricing">View Pricing</Link>
            </Button>
        </div>
      </div>
    </section>
  </>
);

export default Index;

