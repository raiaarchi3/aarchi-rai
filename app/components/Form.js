"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

const EMAIL = "aarchirai1@gmail.com";

// FormSubmit.co sends every form entry to EMAIL, no account or key needed.
const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

const KINDS = ["Website", "Web app", "Landing page", "Portfolio", "AI tool", "Something else"];

// Dotted dark background (same as the hero)
// const DOT_BG = {
//   backgroundColor: "#050505",
//   backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1.2px)",
//   backgroundSize: "8px 8px",
// };
export const DOT_BG = {
  backgroundColor: "#050505",
  backgroundImage: `
    linear-gradient(to bottom, #050505 0%, transparent 25%, transparent 75%, #050505 100%),
    radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1.2px)
  `,
  backgroundSize: "100% 100%, 8px 8px",
};

const GRADIENT_TEXT =
  "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent";

const inputCls =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-neutral-500 outline-none transition-colors focus:border-amber-500/70 focus:bg-white/[0.07]";

const EMPTY = { name: "", email: "", kind: "Website", details: "" };

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New project request: ${form.kind} - ${form.name}`,
          _replyto: form.email,
          _template: "table",
          _captcha: "false",
          Name: form.name,
          Email: form.email,
          "What to make": form.kind,
          Details: form.details,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === "false") throw new Error("failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      style={DOT_BG}
      className="relative min-h-screen overflow-x-clip text-white selection:bg-amber-500 selection:text-black"
    >
      <Navbar />

      <main className="relative z-10 mx-auto max-w-[1400px] px-6 pb-24 pt-32 lg:px-20 lg:pt-40">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-20">
          {/* LEFT: heading + info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-base text-neutral-200">Contact Me</p>
            <h1 className="mt-1 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s build <em className={`italic ${GRADIENT_TEXT}`}>something.</em>
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-neutral-400 sm:text-base">
              Tell me who you are and what you&apos;d like me to make. I&apos;ll get back to you soon.
            </p>

            <div className="mt-10 space-y-3 text-sm text-neutral-400">
              <p>
                <span className="text-neutral-500">Email · </span>
                <a href={`mailto:${EMAIL}`} className="text-neutral-200 underline-offset-4 hover:underline hover:text-amber-400">
                  {EMAIL}
                </a>
              </p>
              <p>
                <span className="text-neutral-500">Based in · </span>
                <span className="text-neutral-200">Delhi NCR, India</span>
              </p>
            </div>
          </motion.div>

          {/* RIGHT: the form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm sm:p-10 shadow-[0_0_30px_rgba(245,158,11,0.02)]"
          >
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <p className="text-3xl font-bold">Thank you! 🎉</p>
                  <p className="mt-3 text-neutral-400">
                    Your request is on its way. I&apos;ll reply to {form.email} soon.
                  </p>
                  <button
                    onClick={() => {
                      setForm(EMPTY);
                      setStatus("idle");
                    }}
                    className="mt-8 rounded-full border border-amber-500/30 px-6 py-2.5 text-sm hover:bg-amber-500 hover:text-black transition-colors"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  {/* name + email side by side */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm text-neutral-300">
                        Your name
                      </label>
                      <input id="name" required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm text-neutral-300">
                        Your email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={set("email")}
                        placeholder="you@example.com"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div>
                    <span className="mb-2 block text-sm text-neutral-300">What should I make?</span>
                    <div className="flex flex-wrap gap-2">
                      {KINDS.map((k) => (
                        <button
                          type="button"
                          key={k}
                          onClick={() => setForm((f) => ({ ...f, kind: k }))}
                          className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                            form.kind === k
                              ? "border-amber-500 bg-amber-500/20 text-white"
                              : "border-white/15 text-neutral-400 hover:text-white"
                          }`}
                        >
                          {k}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="details" className="mb-2 block text-sm text-neutral-300">
                      Tell me a little more
                    </label>
                    <textarea
                      id="details"
                      required
                      rows={5}
                      value={form.details}
                      onChange={set("details")}
                      placeholder="What is it for? Any ideas, links or deadline?"
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-12 shadow-lg shadow-amber-500/10"
                  >
                    {status === "sending" ? "Sending..." : "Send"}
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Please try again, or email me directly at {EMAIL}.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </div>
  );
}