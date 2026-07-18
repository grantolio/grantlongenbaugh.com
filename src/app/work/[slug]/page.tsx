import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.title ?? 'Work' };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="container py-16 md:py-24">
      <p className="section-label">
        <Link href="/work" className="text-text-muted hover:text-text transition-colors">
          Work
        </Link>{' '}
        / {project.title}
      </p>
      <h2>{project.title}</h2>

      {/* Hero image */}
      <Image
        src={project.heroImage}
        alt={project.title}
        width={1200}
        height={514}
        className="w-full aspect-[21/9] object-cover mt-8 mb-12"
        priority
      />

      <div className="max-w-[700px] mx-auto">
        {project.content.map((paragraph, i) => (
          <p key={i} className="mb-5 leading-relaxed">
            {paragraph}
          </p>
        ))}

        {project.subsections?.map((sub, i) => (
          <div key={i}>
            <h3 className="mt-12 mb-4">{sub.title}</h3>
            <p className="leading-relaxed">{sub.description}</p>
          </div>
        ))}
      </div>

      {/* Project images */}
      {project.images.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-16">
          {project.images.slice(1).map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`${project.title} ${i + 2}`}
              width={800}
              height={600}
              className="w-full object-cover"
              loading="lazy"
            />
          ))}
        </div>
      )}

      {project.placeholder && (
        <div className="text-center py-12 text-text-muted italic text-sm">
          {project.placeholder}
        </div>
      )}
    </div>
  );
}
