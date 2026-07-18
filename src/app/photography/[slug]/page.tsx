'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { galleries } from '@/data/galleries';
import Lightbox from '@/components/Lightbox';
import { useParams } from 'next/navigation';

export default function GalleryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const gallery = galleries.find((g) => g.slug === slug);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  if (!gallery) {
    return (
      <div className="container py-24 text-center text-text-muted">
        Gallery not found.
      </div>
    );
  }

  return (
    <>
      <div className="container py-16 md:py-24">
        <p className="section-label">
          <Link
            href="/photography"
            className="text-text-muted hover:text-text transition-colors"
          >
            Photography
          </Link>{' '}
          / {gallery.title}
        </p>
        <h2>{gallery.title}</h2>
        <p className="text-text-muted mt-2">{gallery.location}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 mt-12">
          {gallery.images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`${gallery.title} ${i + 1}`}
              width={800}
              height={533}
              className="w-full aspect-[3/2] object-cover cursor-pointer hover:opacity-[0.88] transition-opacity"
              onClick={() => setLightboxSrc(src)}
              loading="lazy"
            />
          ))}
        </div>

        <div className="text-center py-12 text-text-muted italic text-sm">
          Additional images will be added from Squarespace export
        </div>
      </div>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
}
