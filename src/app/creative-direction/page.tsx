import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creative Direction',
};

export default function CreativeDirectionPage() {
  return (
    <div className="container py-16 md:py-24">
      <p className="section-label">Creative Direction</p>
      <h2>
        Building brands through
        <br />
        story and image
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-start">
        <div className="text-[15px] leading-relaxed">
          <p className="mb-5">
            Grant&apos;s creative direction work centers on finding the
            authentic narrative at the heart of a brand and giving it a visual
            and verbal language that resonates. At ABI Attachments, this has
            meant building a storytelling apparatus from the ground
            up&mdash;documentary campaigns, brand manifestos, and
            market-specific messaging that connects with audiences from Western
            ranchers to sports turf professionals.
          </p>
          <p className="mb-5">
            Previously at Janus Motorcycles, Grant led the creative vision for
            a factory-direct motorcycle brand, building everything from the
            visual identity to ad campaigns to the web presence that helped
            create a new domestic market for small motorcycles.
          </p>
          <p>
            His approach is rooted in restraint: let the story carry the work.
            Strong photography, clear language, and a deep understanding of the
            audience do more than any amount of design flourish.
          </p>
        </div>
        <Image
          src="https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1468863289029-A5ZBKIV822M61DQGLDGK/DSCF6945.jpg"
          alt="Creative direction"
          width={800}
          height={600}
          className="w-full aspect-[4/3] object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}
