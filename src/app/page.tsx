'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from '@/components/Lightbox';
import { projects } from '@/data/projects';
import { featuredPhotos } from '@/data/images';
import { journalPosts } from '@/data/journal';

export default function HomePage() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <div className="container">
        <div className="py-20 md:py-32 lg:py-40">
          <h1>
            Grant
            <br />
            Longenbaugh
          </h1>
          <p className="font-heading text-lg md:text-2xl font-light italic text-text-muted mt-4 max-w-[500px]">
            Storytelling, creative direction, &amp; photography from northern
            Indiana.
          </p>
        </div>
      </div>

      {/* Commercial Work */}
      <div className="container">
        <div className="flex justify-between items-baseline mb-6">
          <p className="section-label !mb-0">Commercial Work</p>
          <Link href="/work" className="link-arrow !mt-0 text-xs">
            All projects &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group transition-transform hover:-translate-y-1"
            >
              <Image
                src={project.heroImage}
                alt={project.title}
                width={600}
                height={450}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="pt-3.5">
                <p className="font-heading text-xl font-normal">
                  {project.title}
                </p>
                <p className="text-xs text-text-muted tracking-wide">
                  {project.types}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="container">
        <hr className="divider" />
      </div>

      {/* Personal Work */}
      <div className="container">
        <div className="flex justify-between items-baseline mb-6">
          <p className="section-label !mb-0">Personal Work</p>
          <Link href="/photography" className="link-arrow !mt-0 text-xs">
            All galleries &rarr;
          </Link>
        </div>
      </div>
      <div className="px-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
          {featuredPhotos.map((photo, i) => (
            <Image
              key={i}
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={533}
              className="w-full aspect-[3/2] object-cover cursor-pointer hover:opacity-[0.88] transition-opacity"
              onClick={() => setLightboxSrc(photo.src)}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <div className="container">
        <hr className="divider" />

        {/* Intro Blurb */}
        <div className="max-w-[600px] text-[17px] leading-relaxed text-text-muted">
          <p>
            <strong className="text-text font-normal">
              Grant Longenbaugh
            </strong>{' '}
            is an artist, designer, and writer working at the intersection of
            storytelling and creative direction. Currently Head of Storytelling
            at ABI Attachments, he brings a photographer&apos;s eye to brand
            narrative, documentary campaigns, and visual identity. He lives in
            Mishawaka, Indiana with his family.
          </p>
        </div>
        <Link href="/about" className="link-arrow">
          More about Grant &rarr;
        </Link>

        <hr className="divider" />

        {/* Recent Journal */}
        <p className="section-label">From the Journal</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {journalPosts.slice(0, 4).map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group"
            >
              <div className="relative w-full aspect-[3/2] mb-3 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p className="text-[11px] text-text-muted tracking-wide uppercase mb-1">
                {post.date}
              </p>
              <p className="font-heading text-xl font-normal">{post.title}</p>
            </Link>
          ))}
        </div>
        <Link href="/journal" className="link-arrow">
          All posts &rarr;
        </Link>
      </div>

      <Lightbox
        src={lightboxSrc}
        onClose={() => setLightboxSrc(null)}
      />
    </>
  );
}
