'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const workLinks = [
  { href: '/work', label: 'All Work' },
  { href: '/work/janus-motorcycles', label: 'Janus Motorcycles' },
  { href: '/work/abi-attachments', label: 'ABI Attachments' },
  { href: '/work/annes-kits-for-kids', label: "Anne's Kits for Kids" },
  { href: '/work/jazz-cafe', label: 'Jazz Cafe' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/creative-direction', label: 'Creative Direction' },
  { href: '/work', label: 'Work', children: workLinks },
  { href: '/photography', label: 'Photography' },
  { href: '/journal', label: 'Journal' },
  { href: '/about', label: 'About' },
  { href: '/reading', label: 'Reading' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-[72px] bg-bg/92 backdrop-blur-xl z-50 border-b border-border flex items-center justify-between px-6 md:px-12">
      <Link
        href="/"
        className="text-[20px] tracking-wide"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
        onClick={() => setMobileOpen(false)}
      >
        Grant Longenbaugh
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-8 items-center list-none">
        {navLinks.map((link) => (
          <li key={link.href} className={link.children ? 'relative group' : ''}>
            {link.children ? (
              <>
                <Link
                  href={link.href}
                  className={`text-[13px] font-normal tracking-widest uppercase transition-colors ${
                    isActive(link.href) ? 'text-text' : 'text-text-muted hover:text-text'
                  }`}
                >
                  {link.label}
                </Link>
                <div className="absolute top-full left-[-12px] bg-bg/96 backdrop-blur-xl border border-border py-2 min-w-[180px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-1.5 text-[12px] text-text-muted hover:text-text transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                href={link.href}
                className={`text-[13px] font-normal tracking-widest uppercase transition-colors ${
                  isActive(link.href) ? 'text-text' : 'text-text-muted hover:text-text'
                }`}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden w-7 h-5 relative flex flex-col justify-between"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-full h-[1.5px] bg-text transition-all ${mobileOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
        <span className={`w-full h-[1.5px] bg-text transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`w-full h-[1.5px] bg-text transition-all ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed top-[72px] left-0 right-0 bottom-0 bg-bg p-12 flex flex-col gap-6 lg:hidden">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="text-lg tracking-widest uppercase text-text-muted hover:text-text transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4 pt-2 flex flex-col gap-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="text-sm text-text-muted hover:text-text transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
