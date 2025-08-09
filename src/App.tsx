
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Check, Sparkles, Mail, Linkedin, ArrowRight, BarChart3, Network, Database, Workflow, Wand2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500" />
            <span className="font-semibold tracking-tight">KC Consulting</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#work" className="hover:text-indigo-600">Work</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="https://www.linkedin.com/in/kcba27/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="#contact">
              <Button className="rounded-2xl">Book a chat</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_120%_-10%,rgba(99,102,241,0.15),transparent_50%),radial-gradient(50rem_50rem_at_-20%_10%,rgba(236,72,153,0.12),transparent_40%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="rounded-full bg-indigo-600 text-white">BI • Analytics • GenAI</Badge>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
              Reporting that actually <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">moves the needle</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              I help business leaders and data teams turn messy data into simple, reliable decision-making. Power BI, Looker, BigQuery, Databricks, Azure — plus automation with GenAI when it makes sense.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact"><Button className="rounded-2xl" >Get a proposal <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
              <a href="#work" className="inline-flex items-center px-4 py-2 rounded-2xl border border-slate-300 hover:bg-slate-50">See work samples</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-600">
              <div className="inline-flex items-center gap-1"><Check className="h-4 w-4 text-emerald-600"/> Enterprise BI</div>
              <div className="inline-flex items-center gap-1"><Check className="h-4 w-4 text-emerald-600"/> Metrics stores</div>
              <div className="inline-flex items-center gap-1"><Check className="h-4 w-4 text-emerald-600"/> Data quality</div>
              <div className="inline-flex items-center gap-1"><Check className="h-4 w-4 text-emerald-600"/> AI accelerators</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-2xl shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white grid place-items-center"><BarChart3 className="h-6 w-6"/></div>
                  <div>
                    <div className="text-sm text-slate-500">Signature Offer</div>
                    <div className="font-semibold">"Executive-Ready Reporting in 30 Days"</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/> Assessment of current dashboards & data model</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/> Prioritized metric definitions & documentation</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/> Rebuild or optimize in your tool of choice (Power BI / Looker)</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/> Executive pack: NLG summaries + decision triggers</li>
                </ul>
                <div className="mt-5">
                  <a href="#contact"><Button className="w-full rounded-2xl">Book discovery call</Button></a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </header>

      {/* Logos / Stack */}
      <section className="py-10 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 flex flex-wrap items-center gap-3">
          {['Power BI','Looker','Databricks','BigQuery','Azure','SQL','dbt','Fabric','Python','GenAI'].map(tag => (
            <Badge key={tag} className="rounded-2xl px-3 py-1">{tag}</Badge>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">How I can help</h2>
            <p className="mt-3 text-slate-600">Bring me a business question, a messy report, or a confused stakeholder group. I’ll deliver a clean model, a clear metric story, and a dashboard people actually use.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                {icon: <BarChart3 className='h-5 w-5'/>, title: 'Executive Dashboards', desc: 'Outcome-focused reporting, KPI trees, and narrative insights.'},
                {icon: <Database className='h-5 w-5'/>, title: 'Data Modeling', desc: 'Star schemas, semantic layers, and metrics governance.'},
                {icon: <Workflow className='h-5 w-5'/>, title: 'Automation & QA', desc: 'Data quality rules, reconciliations, and CI for BI.'},
                {icon: <Wand2 className='h-5 w-5'/>, title: 'GenAI for BI', desc: 'Chat-with-your-metrics prototypes and NLG summaries.'},
              ].map((s, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center">{s.icon}</div>
                      <div className="font-medium">{s.title}</div>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <div className="text-sm text-slate-500">Delivery playbook</div>
              <h3 className="text-xl font-semibold mt-1 flex items-center gap-2"><Sparkles className="h-5 w-5"/> 4-week sprint</h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-700 list-decimal list-inside">
                <li><span className="font-medium">Discover:</span> stakeholders, goals, and current reporting.</li>
                <li><span className="font-medium">Define:</span> canonical KPIs, business rules, and data contracts.</li>
                <li><span className="font-medium">Build:</span> model + dashboards with versioned metrics.</li>
                <li><span className="font-medium">Adopt:</span> training, docs, and a lightweight governance kit.</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Work samples */}
      <section id="work" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold">Selected work</h2>
          <p className="mt-3 text-slate-600">A taste of recent projects. Client names omitted; details available in a private walkthrough.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              title: 'Executive Insights Dashboard',
              blurb: 'Designed a unified KPI dashboard for leadership, combining financial, operational, and customer metrics.',
              tags: ['Power BI','Azure SQL','Data Modeling'],
            },{
              title: 'Self-Service Analytics Enablement',
              blurb: 'Implemented a governed semantic layer and trained teams to build their own reports with confidence.',
              tags: ['Looker','BigQuery','Governance'],
            },{
              title: 'GenAI-Driven KPI Summaries',
              blurb: 'Built a prototype that generates plain-language performance summaries directly from curated metrics.',
              tags: ['Databricks','dbt','GenAI'],
            }].map((w, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="p-6">
                  <div className="font-medium">{w.title}</div>
                  <p className="mt-2 text-sm text-slate-600">{w.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {w.tags.map(t => <Badge key={t} className="rounded-xl">{t}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">About Karthik (KC)</h2>
            <p className="mt-3 text-slate-600">
              I’m a Senior Consultant in Deloitte’s AI & Data practice (Melbourne), focused on business intelligence, data modeling, and making metrics trustworthy. My background spans biotechnology and analytics — which means I care about both scientific rigor and practical outcomes.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/> Power BI certified; experienced with Looker and semantic layers</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/> Strong SQL across BigQuery & Azure SQL; dbt-friendly workflows</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/> Hands-on with Databricks and GenAI accelerators for reporting</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="https://www.linkedin.com/in/kcba27/" target="_blank" rel="noreferrer">
                <Button className="rounded-2xl" variant="outline"><Linkedin className="mr-2 h-4 w-4"/> Connect on LinkedIn</Button>
              </a>
              <a href="#contact"><Button className="rounded-2xl"><Mail className="mr-2 h-4 w-4"/> Request availability</Button></a>
            </div>
          </div>

          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <div className="text-sm text-slate-500">Typical outcomes</div>
              <div className="mt-3 space-y-3 text-sm">
                <div className="flex gap-2"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/> 20–60% faster reporting cycles</div>
                <div className="flex gap-2"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/> Fewer reconciliation fights between teams</div>
                <div className="flex gap-2"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/> Stakeholders who actually trust the numbers</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">Let’s work together</h2>
              <p className="mt-3 text-slate-600">Tell me about your business goals and the decisions you need to speed up. I’ll reply within 1–2 business days with next steps and availability.</p>
              <div className="mt-6 grid gap-3 text-sm">
                {['Discovery call (30–45 min)','Fixed-scope audit (2 weeks)','4-week dashboard sprint','Fractional BI lead (1–2 days/week)'].map((o) => (
                  <div key={o} className="flex items-center gap-2"><Check className="h-5 w-5 text-emerald-600"/>{o}</div>
                ))}
              </div>
            </div>

            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <form action="https://formspree.io/f/xdknkybd" method="POST" className="space-y-4">
                  <Input name="name" placeholder="Your name" required />
                  <Input name="email" type="email" placeholder="Work email" required />
                  <Input name="company" placeholder="Company" />
                  <Textarea name="message" placeholder="What problem are you trying to solve?" rows={5} required />
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-500 inline-flex items-center gap-1"><Network className="h-4 w-4"/> Melbourne • Remote friendly</div>
                    <Button type="submit">Send inquiry</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-slate-600 grid md:grid-cols-2 gap-6">
          <div>
            <div className="font-semibold">KC Consulting</div>
            <p className="mt-2 max-w-prose">Business intelligence, analytics, and GenAI reporting for teams who want clarity and momentum.</p>
          </div>
          <div className="md:text-right space-y-2">
            <a href="mailto:hello@kcconsulting.ai" className="block hover:text-indigo-600">hello@kcconsulting.ai</a>
            <a href="https://www.linkedin.com/in/kcba27/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-indigo-600"><Linkedin className="h-4 w-4"/> kcba27</a>
            <div className="text-xs text-slate-500">© {new Date().getFullYear()} KC Consulting. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
