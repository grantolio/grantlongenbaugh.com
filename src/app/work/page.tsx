import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
};

export default function WorkPage() {
  return (
    <div className="container py-16 md:py-24">
      <p className="section-label">Work</p>
      <h2>Selected projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group transition-transform hover:-translate-y-1"
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              width={800}
              height={500}
              className="w-full aspect-[16/10] object-cover mb-4 transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <p className="font-heading text-2xl font-normal mb-1.5">
              {project.title}
            </p>
            <p className="text-[13px] text-text-muted leading-relaxed">
              {project.shortDesc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
