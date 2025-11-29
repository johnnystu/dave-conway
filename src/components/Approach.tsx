export default function Approach() {
  const pillars = [
    {
      title: "Movement & Mobility",
      description:
        "Yoga, functional strength, and flexibility work designed for adult men. Restoring range of motion, reducing pain, rebuilding confidence in how your body moves. Not performance. Longevity.",
    },
    {
      title: "Cardiovascular Health",
      description:
        "Drawn directly from Dave's work with Respect Health — a proven, evidence-based methodology for understanding and reducing long-term cardiovascular risk. Lifestyle intervention that actually works.",
    },
    {
      title: "Behavioural Science & Adherence",
      description:
        "The difference between a plan and a result. Weekly accountability, habit architecture, breathing protocols, HRV-informed training, and the psychological frameworks that make change stick. This is what most programmes miss. It's the core of Ironbark.",
    },
  ];

  return (
    <section id="approach" className="py-24 md:py-32 bg-[var(--secondary)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-4">
            The Approach
          </h2>
          <div className="w-12 h-px bg-[var(--primary)] mx-auto mb-6" />
          <p className="text-[var(--muted-foreground)] text-lg">
            Three disciplines. One integrated practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-[var(--card)] rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center mb-6">
                <span className="font-serif text-lg text-[var(--primary)]">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-serif text-xl text-[var(--foreground)] mb-4">
                {pillar.title}
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
