export default function Testimonials() {
  const testimonials = [
    {
      quote: "Dave helped me understand that fitness wasn't about pushing harder — it was about showing up consistently. Six months in, I move better than I have in twenty years.",
      name: "James R.",
      title: "Finance Director, 52",
    },
    {
      quote: "I've tried personal trainers before. This is different. Dave gets the psychology of why we don't follow through, and that's what makes the change stick.",
      name: "Michael T.",
      title: "Business Owner, 47",
    },
    {
      quote: "The cardiovascular work was a wake-up call. The mobility sessions changed my day-to-day. But it's the accountability that makes it all happen.",
      name: "David S.",
      title: "Operations Manager, 55",
    },
    {
      quote: "I was sceptical about yoga. Dave made it practical, applicable, and genuinely useful for someone who sits at a desk all day.",
      name: "Andrew K.",
      title: "Consultant, 44",
    },
    {
      quote: "Working with Dave isn't about getting fit — it's about building a foundation for the next thirty years. That perspective changes everything.",
      name: "Richard P.",
      title: "CEO, 49",
    },
    {
      quote: "The remote coaching works surprisingly well. Weekly calls keep me honest, and having someone who understands the science makes all the difference.",
      name: "Stephen M.",
      title: "Software Engineer, 43",
    },
  ];

  // Double the testimonials for seamless loop
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            What Clients Say
          </h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </div>
      </div>

      {/* Scrolling testimonials */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary to-transparent z-10" />

        <div className="flex animate-scroll-left">
          {doubledTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 md:w-96 mx-4"
            >
              <div className="bg-card rounded-lg p-6 h-full shadow-sm">
                <svg
                  className="w-8 h-8 text-primary opacity-30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-foreground text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
