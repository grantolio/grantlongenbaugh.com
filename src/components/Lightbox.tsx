'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';

interface LightboxProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt = '', onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (src) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [src, handleKeyDown]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black/92 z-[200] flex items-center justify-center cursor-zoom-out"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 bg-transparent border-none text-white text-3xl cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={onClose}
      >
        &times;
      </button>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1067}
        className="max-w-[90vw] max-h-[90vh] object-contain w-auto h-auto"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
