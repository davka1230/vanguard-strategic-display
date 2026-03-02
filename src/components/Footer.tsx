import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <h3 className="font-serif text-2xl text-foreground mb-2">Vanguard Peak Advisory</h3>
          <p className="text-muted-foreground text-sm max-w-xs">
            Transforming complexity into competitive advantage since 2009.
          </p>
        </div>
        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-3">
            <Link to="/expertise" className="text-muted-foreground hover:text-foreground transition-colors">Expertise</Link>
            <Link to="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-3 text-muted-foreground">
            <span>New York</span>
            <span>London</span>
            <span>Singapore</span>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border text-muted-foreground text-xs">
        © {new Date().getFullYear()} Vanguard Peak Advisory. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
