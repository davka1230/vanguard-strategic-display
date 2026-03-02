import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
        <FadeInSection>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Contact</p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight mb-6">
            Let's start a <span className="italic">conversation.</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-16">
            Tell us what keeps you up at night. We'll tell you how we can help.
          </p>
        </FadeInSection>

        {submitted ? (
          <FadeInSection>
            <div className="border border-primary/30 p-12 text-center">
              <h2 className="font-serif text-2xl text-foreground mb-3">Thank you.</h2>
              <p className="text-muted-foreground">A member of our team will be in touch within 24 hours.</p>
            </div>
          </FadeInSection>
        ) : (
          <FadeInSection>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300 text-lg"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                  Company Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300 text-lg"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                  What is your biggest challenge?
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300 text-lg resize-none"
                  placeholder="Describe the strategic challenge you're facing..."
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-widest gold-glow hover:brightness-110 transition-all duration-300 w-full md:w-auto"
              >
                Send Inquiry
              </button>
            </form>
          </FadeInSection>
        )}
      </div>
    </main>
  );
};

export default ContactPage;
