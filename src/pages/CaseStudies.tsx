import FadeInSection from "@/components/FadeInSection";

const cases = [
  {
    client: "Apex Industries",
    sector: "Manufacturing",
    title: "Reinventing the Factory Floor with AI-Driven Analytics",
    challenge: "Apex faced $120M in annual waste from outdated production scheduling across 14 global plants.",
    solution: "We deployed a real-time AI optimization engine integrated with existing MES systems, coupled with a change management program across 3,000+ operators.",
    result: "+40%",
    resultLabel: "Production Efficiency",
  },
  {
    client: "Meridian Corp",
    sector: "Financial Services",
    title: "Digital-First Transformation of Wealth Management",
    challenge: "Client onboarding took 22 days on average, causing a 35% drop-off rate among high-net-worth prospects.",
    solution: "End-to-end process redesign with automated KYC, a new client portal, and advisor enablement tools — delivered in 8 months.",
    result: "4 Days",
    resultLabel: "Onboarding Time (from 22)",
  },
  {
    client: "Nova Holdings",
    sector: "Real Estate",
    title: "Market Entry Strategy for Southeast Asia Expansion",
    challenge: "Nova needed to identify optimal entry markets across 6 ASEAN countries with limited local intelligence.",
    solution: "Proprietary market-scoring model combining macroeconomic, demographic, and regulatory data — resulting in a phased 3-year entry roadmap.",
    result: "$2.1B",
    resultLabel: "Pipeline Generated in Year 1",
  },
];

const CaseStudiesPage = () => {
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeInSection>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Case Studies</p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground max-w-3xl leading-tight mb-20">
            Results that <span className="italic">speak</span> for themselves.
          </h1>
        </FadeInSection>

        <div className="space-y-0">
          {cases.map((c, i) => (
            <FadeInSection key={c.client}>
              <article className="border-t border-border py-16 grid md:grid-cols-[1fr_auto] gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-primary">{c.sector}</span>
                    <span className="text-muted-foreground/30">—</span>
                    <span className="text-xs text-muted-foreground">{c.client}</span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 leading-snug">
                    {c.title}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Challenge</h4>
                      <p className="text-foreground/80 leading-relaxed text-sm">{c.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Solution</h4>
                      <p className="text-foreground/80 leading-relaxed text-sm">{c.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-right md:min-w-[160px]">
                  <span className="font-serif text-5xl md:text-6xl text-primary">{c.result}</span>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{c.resultLabel}</p>
                </div>
              </article>
            </FadeInSection>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </main>
  );
};

export default CaseStudiesPage;
