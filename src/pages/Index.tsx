import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const clients = [
  "Apex Industries", "Meridian Corp", "Nova Holdings", "Titan Global",
  "Pinnacle Group", "Summit Ventures",
];

const insights = [
  {
    tag: "Digital",
    title: "Why 73% of Digital Transformations Fail — And How to Beat the Odds",
    date: "Feb 2026",
  },
  {
    tag: "AI Strategy",
    title: "The Executive's Playbook for Enterprise AI Adoption",
    date: "Jan 2026",
  },
  {
    tag: "Operations",
    title: "Lean at Scale: Building Operational Resilience in Volatile Markets",
    date: "Dec 2025",
  },
];

const HomePage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground fade-in-up">
            Transforming Data
            <br />
            <span className="italic">into Decisive</span>
            <br />
            <span className="text-primary">Strategy.</span>
          </h1>
          <p className="mt-8 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto fade-in-up-delay-2">
            We partner with the world's most ambitious organizations to unlock growth, navigate disruption, and build enduring competitive advantage.
          </p>
          <div className="mt-10 fade-in-up-delay-3">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-widest gold-glow hover:brightness-110 transition-all duration-300"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <FadeInSection>
        <section className="border-t border-b border-border py-12">
          <div className="container mx-auto px-6 lg:px-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-center mb-8">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              {clients.map((c) => (
                <span
                  key={c}
                  className="text-muted-foreground/50 font-serif text-lg md:text-xl tracking-wide"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Featured Insights */}
      <FadeInSection>
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16">
              Featured Insights
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {insights.map((item) => (
                <article
                  key={item.title}
                  className="group border border-border p-8 hover:border-primary/40 transition-colors duration-500 cursor-pointer"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-primary">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-xl mt-4 mb-6 text-foreground group-hover:text-primary transition-colors duration-300 leading-relaxed">
                    {item.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
};

export default HomePage;
