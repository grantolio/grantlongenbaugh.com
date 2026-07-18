import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container py-24 md:py-40 text-center">
      <h1 className="mb-4">404</h1>
      <p className="text-text-muted mb-8">This page doesn&apos;t exist.</p>
      <Link href="/" className="link-arrow">
        Back to home &rarr;
      </Link>
    </div>
  );
}
