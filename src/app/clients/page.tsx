"use client";

import { useState } from "react";

export default function ClientArea() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("Please check your credentials and try again.");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <a href="/" className="font-serif text-xl font-medium text-foreground">
            Ironbark Training
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Client Area
            </h1>
            <div className="w-12 h-px bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground leading-relaxed">
              Welcome back. This space is reserved for Ironbark Training clients — 
              a private area to access your personalised programmes, track progress, 
              and stay connected between sessions.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="••••••••"
                  required
                />
              </div>

              {error && (
                <p className="text-destructive text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Trouble signing in?{" "}
                <a 
                  href="mailto:dave@ironbark.training" 
                  className="text-primary hover:underline"
                >
                  Contact Dave
                </a>
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Not yet a client?
            </p>
            <a
              href="/#contact"
              className="inline-block border border-primary text-primary px-6 py-3 rounded-md font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ironbark Training. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground tracking-wider">
            Ironbark Method: 193472
          </p>
        </div>
      </footer>
    </div>
  );
}
