import Link from 'next/link';
import Image from 'next/image';
import { journalPosts } from '@/data/journal';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  return { title: post?.title ?? 'Journal' };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Distribute images throughout content (skip first — it's the hero)
  const inlineImages = post.images.slice(1);
  const imageInterval = inlineImages.length > 0
    ? Math.floor(post.content.length / inlineImages.length)
    : post.content.length + 1;

  let imageCounter = 0;

  return (
    <div className="container py-16 md:py-24">
      <p className="section-label">
        <Link
          href="/journal"
          className="text-text-muted hover:text-text transition-colors"
        >
          Journal
        </Link>
      </p>

      <div className="max-w-[700px] mx-auto">
        <p className="text-xs text-text-muted tracking-wide mb-4">
          {post.date}
        </p>
        <h2 className="mb-8">{post.title}</h2>

        {/* Hero image — no fixed aspect ratio, shows full image */}
        <div className="relative w-full mb-12">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1200}
            height={800}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 700px"
            priority
          />
        </div>

        <div className="prose">
          {post.content.map((paragraph, i) => {
            // Insert an inline image at regular intervals
            const shouldShowImage =
              inlineImages.length > 0 &&
              imageCounter < inlineImages.length &&
              imageInterval > 0 &&
              (i + 1) % imageInterval === 0;

            const currentImageIndex = imageCounter;
            if (shouldShowImage) imageCounter++;

            return (
              <div key={i}>
                <p style={{ whiteSpace: 'pre-line' }}>{paragraph}</p>
                {shouldShowImage && (
                  <div className="relative w-full my-8">
                    <Image
                      src={inlineImages[currentImageIndex]}
                      alt={`${post.title} — ${currentImageIndex + 2}`}
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 700px"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
