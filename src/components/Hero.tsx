export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Subtle background texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary opacity-5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent opacity-10 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-medium text-foreground mb-6 animate-fade-in-up">
          Ironbark Training
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-up animation-delay-100 font-light tracking-wide">
          Movement. Longevity. Follow-through.
        </p>
        
        <div className="w-16 h-px bg-primary mx-auto mb-8 animate-fade-in-up animation-delay-200" />
        
        <p className="text-base md:text-lg text-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-300 leading-relaxed">
          Premium health and longevity coaching for men over 40. 
          Build the foundation that lasts.
        </p>
        
        <a
          href="#contact"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium text-sm tracking-wide hover:opacity-90 transition-opacity animate-fade-in-up animation-delay-400"
        >
          Get in Touch
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-muted-foreground"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
 
