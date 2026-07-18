import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 md:mt-24">
      <div className="max-w-site mx-auto px-6 md:px-12 py-10 flex justify-between items-center">
        <div className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Grant Longenbaugh
        </div>
        <ul className="flex gap-6 list-none">
          <li>
            <a
              href="https://instagram.com/grantolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-text transition-colors tracking-wide"
            >
              Instagram
            </a>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-xs text-text-muted hover:text-text transition-colors tracking-wide"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
