"use client";

import { useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";
import SocialIcons from "@/components/shared/SocialIcons";

type FormType = "general" | "story" | "collaborate";

export default function ContactPage() {
  const [formType, setFormType] = useState<FormType>("general");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: formType }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-sm border border-imn-gray-200 bg-imn-gray-50 focus:border-imn-red focus:ring-1 focus:ring-imn-red text-sm text-imn-dark placeholder:text-imn-gray-400 transition-colors";

  return (
    <div className="pt-0">
      {/* Hero Banner */}
      <section className="bg-imn-red pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-wide">
          <h1 className="font-sans text-display-sm md:text-display lg:text-display-lg font-black uppercase tracking-tight text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl">
            Have a story to tell? Want to collaborate? Lets Talk
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                {/* Form Type Selector */}
                <div className="flex gap-2 mb-8">
                  {[
                    { key: "general" as FormType, label: "General" },
                    { key: "story" as FormType, label: "Submit Story" },
                    { key: "collaborate" as FormType, label: "Collaborate" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setFormType(tab.key)}
                      className={`px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors ${
                        formType === tab.key
                          ? "bg-imn-dark text-white"
                          : "bg-imn-gray-100 text-imn-gray-600 hover:bg-imn-gray-200"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-imn-dark mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-imn-dark mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-imn-dark mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className={inputClasses}
                      placeholder={
                        formType === "story"
                          ? "Your story headline"
                          : formType === "collaborate"
                          ? "Collaboration proposal"
                          : "What's this about?"
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-imn-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={inputClasses + " resize-none"}
                      placeholder={
                        formType === "story"
                          ? "Tell us about your story — what happened, where, and why it matters..."
                          : formType === "collaborate"
                          ? "Describe your organization and how you'd like to work together..."
                          : "Your message..."
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-10 py-4 bg-imn-red text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-imn-red-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>

                  {status === "success" && (
                    <p className="text-green-600 text-sm font-medium animate-fade-in">
                      Message sent successfully! We&apos;ll get back to you soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 text-sm font-medium animate-fade-in">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>

              {/* Sidebar Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-imn-gray-400 mb-3">
                    Email
                  </h3>
                  <a
                    href="mailto:info@ibexmedianetwork.com"
                    className="text-imn-red hover:underline text-sm font-bold"
                  >
                    info@ibexmedianetwork.com
                  </a>
                </div>

                <div>
                  <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-imn-gray-400 mb-3">
                    Phone / WhatsApp
                  </h3>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-imn-red hover:underline text-sm font-bold"
                  >
                    +92 311 580 4020
                  </a>
                </div>

                <div>
                  <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-imn-gray-400 mb-3">
                    Follow Us
                  </h3>
                  <SocialIcons variant="dark" size="md" />
                </div>

                <div className="p-6 bg-imn-dark rounded-sm">
                  <h3 className="font-sans text-sm font-bold uppercase text-white mb-2">
                    Quick Response
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    For fastest response, reach us on WhatsApp.
                  </p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-[#20BD5A] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
