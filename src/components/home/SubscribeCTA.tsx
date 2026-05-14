"use client";

import { useState } from "react";

export default function SubscribeCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-imn-dark py-20 md:py-32">
      <div className="container-wide text-center">
        <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-white mb-4">
          Stay in the Loop
        </h2>
        <p className="text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Get our best stories delivered straight to your inbox.
          No spam, just impactful journalism.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-4 rounded-sm bg-white/10 border border-white/20
              text-white placeholder:text-white/40 text-sm
              focus:outline-none focus:bg-white/15 focus:border-white/40
              transition-all"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-4 bg-imn-red text-white font-bold uppercase tracking-wider text-sm rounded-sm
              hover:bg-imn-red-dark transition-all active:scale-[0.98]
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-white/80 text-sm font-medium animate-fade-in">
            Thank you for subscribing! Check your inbox soon.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-white/80 text-sm font-medium animate-fade-in">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
