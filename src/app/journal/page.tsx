import Link from 'next/link';
import Image from 'next/image';
import { journalPosts } from '@/data/journal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journal',
};

export default function JournalPage() {
  return (
    <div className="container py-16 md:py-24">
      <p className="section-label">Journal</p>
      <h2>Writing &amp; field notes</h2>

      <div className="mt-12">
        {journalPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 sm:gap-8 py-8 border-b border-border hover:bg-black/[0.01] transition-colors"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <div>
              <p className="text-xs text-text-muted tracking-wide mb-1.5">
                {post.date}
              </p>
              <p className="font-heading text-[22px] font-normal mb-2">
                {post.title}
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
