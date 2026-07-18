import Image from 'next/image';
import { aboutPhoto } from '@/data/images';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 md:gap-16 lg:gap-20 py-16 md:py-24 items-start">
        <Image
          src={aboutPhoto}
          alt="Grant Longenbaugh"
          width={600}
          height={800}
          className="w-full aspect-[3/4] object-cover"
          priority
        />
        <div className="md:pt-16 lg:pt-24">
          <p className="section-label">About</p>
          <h2 className="mb-8">Grant Longenbaugh</h2>
          <p className="mb-5 leading-relaxed">
            Grant Longenbaugh is an artist, designer, and writer. He works
            primarily in photography and brings a subtractive compositional
            approach to everything he makes&mdash;removing until only the
            essential remains.
          </p>
          <p className="mb-5 leading-relaxed">
            He currently serves as Head of Storytelling at ABI Attachments,
            where he leads creative direction across documentary campaigns,
            brand language, and market-specific advertising. Previously, he
            spent nearly a decade at Janus Motorcycles, building the
            brand&apos;s visual identity and creative output from the ground up.
          </p>
          <p className="mb-5 leading-relaxed">
            A product of his Midwestern roots, Grant is drawn to small
            landscapes&mdash;but isn&apos;t beyond marveling. He has served as
            photographer-in-residence at Olympic National Park, and his
            photography practice continues to be the through-line connecting
            his professional and personal creative work.
          </p>
          <p className="mb-5 leading-relaxed">
            He has experience in creative direction, graphic design, layout,
            self-publishing, social media, and education. He loves to learn and
            teach.
          </p>
          <p className="mb-5 leading-relaxed">
            Grant lives in Mishawaka, Indiana with his wife, young child, and
            dog.
          </p>
          <div className="mt-8">
            <a
              href="https://instagram.com/grantolio"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              @grantolio on Instagram &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
