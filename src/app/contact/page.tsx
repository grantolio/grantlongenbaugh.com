'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to a form handler (Formspree, Vercel functions, etc.)
    setSubmitted(true);
  };

  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-[560px]">
        <p className="section-label">Contact</p>
        <h2>Get in touch</h2>
        <p className="text-text-muted mt-4 mb-10">
          Have a project in mind, or just want to say hello? Drop a note below
          or find me on{' '}
          <a
            href="https://instagram.com/grantolio"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-text-muted hover:border-text transition-colors"
          >
            Instagram
          </a>
          .
        </p>

        {submitted ? (
          <div className="py-12 text-text-muted">
            <p className="font-heading text-2xl text-text mb-2">
              Thanks for reaching out.
            </p>
            <p>I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-[11px] font-medium tracking-widest uppercase text-text-muted mb-2">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full py-3 border-0 border-b border-border bg-transparent text-[15px] text-text outline-none focus:border-text transition-colors font-body"
              />
            </div>
            <div className="mb-6">
              <label className="block text-[11px] font-medium tracking-widest uppercase text-text-muted mb-2">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full py-3 border-0 border-b border-border bg-transparent text-[15px] text-text outline-none focus:border-text transition-colors font-body"
              />
            </div>
            <div className="mb-6">
              <label className="block text-[11px] font-medium tracking-widest uppercase text-text-muted mb-2">
                Message
              </label>
              <textarea
                required
                placeholder="What's on your mind?"
                rows={5}
                className="w-full py-3 border-0 border-b border-border bg-transparent text-[15px] text-text outline-none focus:border-text transition-colors resize-y min-h-[120px] font-body"
              />
            </div>
            <button
              type="submit"
              className="inline-block px-9 py-3 text-xs font-medium tracking-widest uppercase bg-text text-bg border-none cursor-pointer hover:opacity-80 transition-opacity"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
