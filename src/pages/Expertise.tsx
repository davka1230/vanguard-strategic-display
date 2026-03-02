import FadeInSection from "@/components/FadeInSection";
import { Link } from "react-router-dom";

const pillars = [
  {
    title: "Digital Transformation",
    description: "End-to-end strategy for migrating legacy systems, adopting cloud-native architectures, and building digital-first customer experiences.",
    icon: "01",
  },
  {
    title: "Operational Excellence",
    description: "Lean process redesign, supply chain optimization, and performance management frameworks that drive measurable efficiency gains.",
    icon: "02",
  },
  {
    title: "AI Strategy",
    description: "From proof-of-concept to enterprise-wide deployment — we help you harness artificial intelligence as a strategic asset, not just a tool.",
    icon: "03",
  },
  {
    title: "Market Entry",
    description: "Data-driven market sizing, competitive positioning, and go-to-market blueprints for new geographies and verticals.",
    icon: "04",
  },
];

const ExpertisePage = () => {
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeInSection>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Expertise</p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground max-w-3xl leading-tight mb-6">
            Four pillars of <span className="italic">transformative</span> impact.
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-20">
            We focus where the stakes are highest and the complexity is greatest.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <FadeInSection key={p.title}>
              <div className="border border-border p-10 md:p-12 hover:border-primary/40 transition-colors duration-500 h-full flex flex-col">
                <span className="text-primary font-serif text-4xl mb-6">{p.icon}</span>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">{p.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection className="mt-20 text-center">
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-widest gold-glow hover:brightness-110 transition-all duration-300"
          >
            Discuss Your Challenge
          </Link>
        </FadeInSection>
      </div>
    </main>
  );
};

export default ExpertisePage;
