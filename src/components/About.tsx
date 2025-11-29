export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Why Ironbark */}
        <div className="mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-8">
            Why Ironbark
          </h2>
          <div className="w-12 h-px bg-[var(--primary)] mb-8" />
          <p className="text-[var(--foreground)] leading-relaxed text-lg">
            The ironbark is one of the hardest, most resilient trees on earth — built to endure fire, 
            drought, and decades of pressure without breaking. It doesn&apos;t grow fast. It grows strong. 
            For men in their forties and beyond, that resonates. You&apos;ve spent years carrying weight — 
            work, family, responsibility — and the body has quietly absorbed it all. Ironbark Health 
            is about building the kind of foundation that lasts: mobility that returns, habits that stick, 
            health that compounds over time. Not a quick fix. Not a reinvention. Just the long, patient 
            work of looking after what you&apos;ve built — so it carries you further.
          </p>
        </div>

        {/* About Dave */}
        <div className="bg-[var(--card)] rounded-lg p-8 md:p-12 shadow-sm">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-8">
            About Dave
          </h2>
          <div className="w-12 h-px bg-[var(--primary)] mb-8" />
          
          <div className="space-y-6 text-[var(--foreground)] leading-relaxed">
            <p>
              Thirty years in high-stakes, high-pressure environments across the globe. Then seven 
              years asking a different question: how do you help people live longer, move better, 
              and actually follow through on the changes that matter?
            </p>
            
            <p>
              Dave is a qualified health coach, yoga instructor, and specialist in breathing and 
              HRV-based training interventions. He&apos;s a founding director of Respect Health, a 
              cardiovascular disease intervention programme now published in the British Medical 
              Journal for its community impact.
            </p>
            
            <p>
              He&apos;s worked with endurance athletes, executives, and men who haven&apos;t touched their 
              toes in twenty years. The thread running through all of it: sustainable change comes 
              from closing the gap between knowing and doing.
            </p>
            
            <p className="font-medium text-[var(--primary)]">
              Ironbark Health is where that work happens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
