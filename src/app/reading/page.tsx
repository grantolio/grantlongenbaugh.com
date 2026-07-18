import { currentlyReading, completed2016 } from '@/data/reading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What I'm Reading",
};

export default function ReadingPage() {
  return (
    <div className="container py-16 md:py-24">
      <p className="section-label">What I&apos;m Reading</p>

      <div className="max-w-[700px]">
        <p className="text-[15px] leading-relaxed text-text-muted mb-10">
          My reading list is heavily influenced by my passion for creativity,
          spirituality, nature, the recommendations of respected friends, and a
          few blogs that are daily reads for me. I rely heavily on Amazon&apos;s
          used book market&mdash;often I can get a nice used version of a book I
          want on my doorstep for four to six dollars.
        </p>

        {/* Currently Reading */}
        <div className="mb-12">
          <h3 className="mb-5 pb-2 border-b border-border">
            Currently Reading
          </h3>
          {currentlyReading.map((book, i) => (
            <div key={i} className="py-4 border-b border-black/[0.04]">
              <p className="font-heading text-lg font-normal italic">
                {book.title}
              </p>
              <p className="text-[13px] text-text-muted mt-0.5">
                {book.author}
              </p>
            </div>
          ))}
        </div>

        {/* 2016 */}
        <div className="mb-12">
          <h3 className="mb-5 pb-2 border-b border-border">
            2016 Completed
          </h3>
          {completed2016.map((book, i) => (
            <div key={i} className="py-4 border-b border-black/[0.04]">
              <p className="font-heading text-lg font-normal italic">
                {book.title}
              </p>
              <p className="text-[13px] text-text-muted mt-0.5">
                {book.author}
              </p>
              {book.note && (
                <p className="text-sm text-text-muted mt-2 leading-relaxed">
                  {book.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
