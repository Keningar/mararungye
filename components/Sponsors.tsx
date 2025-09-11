'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { sponsors } from '@/const/sponsors';

export default function Sponsors() {
  // Inicializamos el carrusel con autoplay cada 4s
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
        Gracias a la confianza de nuestros patrocinadores
      </p>

      <div className="relative mt-6 lg:mt-8">
        {/* Embla viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] p-2"
              >
                <div className="relative w-full h-40 sm:h-56 lg:h-64">
                  <Image
                    src={sponsor.staticImageData}
                    alt={sponsor.description}
                    fill
                    style={{ objectFit: 'cover' }}
                    placeholder="blur"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
