"use client";

import { useState } from "react";

export default function Contact() {
  const [humanCheck, setHumanCheck] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  const correctAnswer = "11"; // 4 + 7

  const handleVerify = () => {
    if (humanCheck.trim() === correctAnswer) {
      setIsVerified(true);
      setError("");
    } else {
      setError("That's not quite right. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Get in Touch
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground">
            Ready to build a foundation that lasts? Let&apos;s talk.
          </p>
        </div>

        <div className="bg-card rounded-lg p-8 md:p-10 shadow-sm">
          {!isVerified ? (
            <div className="text-center">
              <p className="text-foreground mb-6">
                Quick check before we continue:
              </p>
              <label className="block text-muted-foreground mb-4">
                What is 4 + 7?
              </label>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <input
                  type="text"
                  value={humanCheck}
                  onChange={(e) => setHumanCheck(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleVerify()}
                  className="w-24 px-4 py-3 border border-border rounded-md bg-input text-foreground text-center focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="?"
                />
                <button
                  onClick={handleVerify}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Continue
                </button>
              </div>
              {error && (
                <p className="text-destructive text-sm mt-4">{error}</p>
              )}
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-muted-foreground mb-8">
                  Thanks for confirming. Here&apos;s how to reach Dave:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Email */}
                <a
                  href="mailto:dave@ironbarkhealth.co.uk"
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary transition-colors">
                    <svg
                      className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">
                      dave@ironbarkhealth.co.uk
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+447700000000"
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary transition-colors">
                    <svg
                      className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">
                      +44 7700 000 000
                    </p>
                  </div>
                </a>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Dave typically responds within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
