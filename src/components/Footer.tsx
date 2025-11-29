export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg text-foreground">
              Ironbark Health
            </p>
            <p className="text-sm text-muted-foreground">
              Movement. Longevity. Follow-through.
            </p>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Ironbark Health. All rights reserved.
          </p>
          
          {/* The signature */}
          <p className="text-xs text-muted-foreground tracking-wider">
            Ironbark Method: 193472
          </p>
        </div>
      </div>
    </footer>
  );
}
