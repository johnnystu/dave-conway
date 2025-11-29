export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Services
          </h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </div>

        <div className="space-y-12">
          {/* Private Coaching */}
          <div className="bg-card rounded-lg p-8 md:p-10 shadow-sm">
            <h3 className="font-serif text-2xl text-foreground mb-2">
              Private Coaching
            </h3>
            <p className="text-muted-foreground mb-8">
              One-to-one. In-person. Built around you.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Standard */}
              <div className="border border-border rounded-lg p-6">
                <div className="flex items-baseline justify-between mb-4">
                  <h4 className="font-serif text-xl text-foreground">Standard</h4>
                  <span className="text-primary font-medium">£120/week</span>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Weekly in-person longevity and mobility session
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Cardiovascular health screening methodology
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Personalised mobility and flexibility programming
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Breathing and HRV-based training protocols
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Weekly habit and adherence review
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    WhatsApp accountability between sessions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Stress, sleep and recovery guidance
                  </li>
                </ul>
              </div>

              {/* Premium */}
              <div className="border-2 border-primary rounded-lg p-6 relative">
                <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                  Recommended
                </div>
                <div className="flex items-baseline justify-between mb-4">
                  <h4 className="font-serif text-xl text-foreground">Premium</h4>
                  <span className="text-primary font-medium">£160/week</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Everything in Standard, plus:
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Second weekly contact point (remote)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Monthly video movement assessment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Nutrition guidance for energy and performance
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6 text-center">
              Minimum commitment: 12 weeks
            </p>
          </div>

          {/* Corporate Wellbeing */}
          <div className="bg-card rounded-lg p-8 md:p-10 shadow-sm">
            <h3 className="font-serif text-2xl text-foreground mb-2">
              Corporate Wellbeing
            </h3>
            <p className="text-muted-foreground mb-8">
              Half-day experiences for organisations that want their people to move, breathe and reset.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Workshop */}
              <div className="border border-border rounded-lg p-6">
                <div className="flex items-baseline justify-between mb-4">
                  <h4 className="font-serif text-xl text-foreground">Half-Day Workshop</h4>
                  <span className="text-primary font-medium">£950</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">3 hours</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Men&apos;s yoga and functional mobility session
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Posture and movement reset for desk-based teams
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Breathwork for mental clarity and focus
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Stress management and resilience frameworks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Practical movement prescriptions
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4">
                  Up to 15 participants. Additional attendees at £40 per head.
                </p>
              </div>

              {/* Padelboard */}
              <div className="border border-border rounded-lg p-6">
                <div className="flex items-baseline justify-between mb-4">
                  <h4 className="font-serif text-xl text-foreground">Summer Padelboard</h4>
                  <span className="text-primary font-medium">£950</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Up to 8 participants</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    On-water padelboard technique
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Breath and balance practice
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Mobility warm-up
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Blue-health mindfulness
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Global Remote */}
          <div className="bg-card rounded-lg p-8 md:p-10 shadow-sm">
            <h3 className="font-serif text-2xl text-foreground mb-2">
              Global Remote Coaching
            </h3>
            <p className="text-muted-foreground mb-8">
              For clients anywhere in the world who want direct access — not a programme, not a video library, not a group.
            </p>

            <div className="max-w-md">
              <div className="border border-border rounded-lg p-6">
                <div className="flex items-baseline justify-between mb-4">
                  <h4 className="font-serif text-xl text-foreground">1:1 Remote</h4>
                  <span className="text-primary font-medium">£100/week</span>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Weekly video session — planning, accountability, technique
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Fully personalised mobility programme
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Breathing and HRV-based protocols
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Direct WhatsApp access between sessions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Behaviour-change and adherence support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Monthly review and adjustment
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              No groups. No recordings. One coach. One client. One programme.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Minimum commitment: 12 weeks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
