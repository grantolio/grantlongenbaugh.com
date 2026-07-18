import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-[560px]">
        <p className="section-label">Contact</p>
        <h2>Get in touch</h2>
        <p className="text-text-muted mt-4 mb-10 leading-relaxed">
          Have a project in mind, or just want to say hello? Send me an email
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

        <a
          href="mailto:grantlongenbaugh@gmail.com"
          className="inline-block px-9 py-3 text-xs font-medium tracking-widest uppercase bg-text text-bg border-none cursor-pointer hover:opacity-80 transition-opacity"
        >
          Email Me
        </a>
      </div>
    </div>
  );
}
