"use client";

import { useState } from "react";

export default function LetsTalk() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-imn-gray-200 rounded-sm text-sm text-imn-dark placeholder:text-imn-gray-400 focus:outline-none focus:border-imn-red focus:ring-1 focus:ring-imn-red transition-colors";

  return (
    <section className="bg-imn-red py-20 md:py-32">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-white mb-3 text-center">
            Let&apos;s Talk
          </h2>
          <p className="text-white/70 text-base mb-10 text-center max-w-lg mx-auto">
            Ready to start your next project? Have a burning question? We love a good challenge. Reach out and let&apos;s create something great together.
          </p>

          {status === "success" ? (
            <div className="bg-white rounded-sm p-6 text-center">
              <p className="text-imn-dark font-bold uppercase tracking-wider text-sm mb-1">
                Message Sent
              </p>
              <p className="text-imn-gray-500 text-sm">
                We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className={inputClasses}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2">
                    Subject*
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className={inputClasses}
                  />
                </div>
              </div>
              <div>
                <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2">
                  Message*
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className={inputClasses + " resize-none"}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-10 py-4 bg-imn-dark text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>
              {status === "error" && (
                <p className="text-white/80 text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
