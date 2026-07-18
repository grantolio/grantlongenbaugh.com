import Image from 'next/image';
import Link from 'next/link';
import { galleries } from '@/data/galleries';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photography',
};

export default function PhotographyPage() {
  return (
    <div className="container py-16 md:py-24">
      <p className="section-label">Photography</p>
      <h2>Galleries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {galleries.map((gallery) => (
          <Link
            key={gallery.slug}
            href={`/photography/${gallery.slug}`}
            className="relative overflow-hidden group"
          >
            <Image
              src={gallery.coverImage}
              alt={gallery.title}
              width={800}
              height={500}
              className="w-full aspect-[16/10] object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-[0.85]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
              <h3 className="font-heading text-[22px] font-light text-white">
                {gallery.title}
              </h3>
              <span className="text-xs text-white/80 tracking-wide">
                {gallery.location}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
