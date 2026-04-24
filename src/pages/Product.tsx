import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck, GraduationCap, LayoutDashboard, Check, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";

const modules = [
  {
    icon: ClipboardCheck,
    name: "Approval Engine",
    tagline: "Stop chasing signatures.",
    desc: "Every leave request, fee waiver, and transfer follows a clear path. Principals approve from their phone — staff knows exactly where it is.",
    bullets: [
      "Multi-step approval flows you configure once",
      "WhatsApp + email notifications at every step",
      "Full audit trail — who approved what and when",
    ],
    mock: { l: "Leave request · Class IX-B", v: "Awaiting Principal", s: "2 of 3 approved" },
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-100",
    accentColor: "text-blue-500",
    fillColor: "bg-blue-600/90",
    glowColor: "bg-blue-600"
  },
  {
    icon: GraduationCap,
    name: "Student Portal",
    tagline: "One login. Every record.",
    desc: "Students and parents see attendance, marks, fees, and notices in real time. No more phone calls to the office for a marksheet.",
    bullets: [
      "Attendance and marks updated by teachers in seconds",
      "Online fee payment with auto-receipts",
      "Parent-teacher messaging built in",
    ],
    mock: { l: "Aanya Sharma · Class X-A", v: "94% attendance", s: "Term 2 fees: ₹0 due" },
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    borderColor: "border-indigo-100",
    accentColor: "text-indigo-500",
    fillColor: "bg-indigo-600/90",
    glowColor: "bg-indigo-600"
  },
  {
    icon: LayoutDashboard,
    name: "Admin Dashboard",
    tagline: "The command centre.",
    desc: "One screen for enrolment, fee collection, staff load, and exam schedules. The numbers you need before the management meeting.",
    bullets: [
      "Live KPIs — attendance, dues, applications",
      "Export-ready board reports in one click",
      "Role-based access for vice-principals and HODs",
    ],
    mock: { l: "April overview", v: "₹4.8L collected", s: "12 approvals pending" },
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-100",
    accentColor: "text-emerald-500",
    fillColor: "bg-emerald-600/90",
    glowColor: "bg-emerald-600"
  },
];

const Product = () => (
  <>
    <Seo
      title="Product Modules — KALNET School Management Software"
      description="Explore KALNET's three modules: Approval Engine, Student Portal, and Admin Dashboard — built for Indian schools and colleges."
      path="/product"
    />

    {/* Hero Section */}
    <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32 border-b border-slate-200 text-center">
        <div className="absolute top-0 left-0 -mt-24 -ml-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 -mb-24 -mr-24 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl opacity-50" />
        
        <div className="container relative z-10">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
                <Zap className="h-4 w-4" />
                Modernizing Institutional Infrastructure
            </div>
            <h1 className="mx-auto max-w-4xl font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
                The Architecture of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Growth.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600 md:text-xl leading-relaxed">
                Three independent yet perfectly synced modules designed to replace the chaos of registers and spreadsheets with a single digital pulse.
            </p>
        </div>
    </section>

    {/* Module Showcases */}
    <section className="bg-white">
      {modules.map((m, i) => (
        <div
          key={m.name}
          className={`py-24 md:py-32 border-b border-slate-100 last:border-0 ${i % 2 === 1 ? "bg-slate-50/50" : ""}`}
        >
          <div className="container grid gap-16 md:grid-cols-2 md:items-center">
            <div className={`space-y-8 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${m.bgColor} ${m.textColor} border ${m.borderColor} shadow-sm`}>
                <m.icon className="h-8 w-8" />
              </div>
              <div className="space-y-4">
                <p className={`text-sm font-bold uppercase tracking-widest ${m.textColor}`}>{m.name}</p>
                <h2 className="font-display text-4xl font-extrabold text-slate-900 tracking-tight md:text-5xl">{m.tagline}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
              <ul className="space-y-4">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-4 text-slate-700 font-medium">
                    <Check className={`mt-1 h-5 w-5 shrink-0 ${m.accentColor}`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <div className="relative group">
                <div className={`absolute -inset-4 rounded-[3rem] ${m.glowColor} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity`} aria-hidden />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                  <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50/80 px-6 py-4">
                    <div className="flex gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-slate-200" />
                        <span className="h-3 w-3 rounded-full bg-slate-200" />
                        <span className="h-3 w-3 rounded-full bg-slate-200" />
                    </div>
                    <span className="ml-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Live Simulation Environment</span>
                  </div>
                  <div className="p-12 space-y-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{m.mock.l}</p>
                        <p className="font-display text-4xl font-extrabold text-slate-900">{m.mock.v}</p>
                        <p className={`mt-2 text-sm font-bold ${m.textColor} underline underline-offset-4`}>{m.mock.s}</p>
                    </div>
                    <div className="pt-6 grid grid-cols-3 gap-3">
                      <div className={`h-2.5 rounded-full ${m.fillColor} shadow-sm`} />
                      <div className={`h-2.5 rounded-full ${m.fillColor} shadow-sm`} />
                      <div className="h-2.5 rounded-full bg-slate-100 shadow-inner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>

    {/* Final CTA */}
    <section className="bg-slate-900 py-24 md:py-32 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        
        <div className="container relative z-10 space-y-8">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mx-auto max-w-4xl font-display text-4xl font-extrabold tracking-tight md:text-6xl">
                Ready to See the Difference?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-400">
                Join the institutions that have moved beyond legacy software to a modern digital backbone.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <Button asChild size="lg" className="bg-primary text-white hover:opacity-90 h-16 px-12 text-xl font-bold rounded-2xl shadow-xl shadow-primary/30 w-full sm:w-auto">
                    <Link to="/demo">Book a Live Demo</Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="h-16 px-12 text-xl font-bold rounded-2xl border border-white/10 hover:bg-white/5 w-full sm:w-auto">
                    <Link to="/pricing">Explore Pricing</Link>
                </Button>
            </div>
        </div>
    </section>
  </>
);

export default Product;