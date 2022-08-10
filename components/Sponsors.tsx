import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Slider, Slide } from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

import { useIsMedium, useIsLarge } from "@/utils/useMediaQuery";
import { sponsors } from "@/const/sponsors";

const CarouselProvider = dynamic<any>(
  () => import("pure-react-carousel").then((_) => _.CarouselProvider),
  {
    ssr: false,
  }
);

export default function Sponsors() {
  const isMedium = useIsMedium();
  const isLarge = useIsLarge();

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
        Gracias a la confianza de nuestros patrocinadores
      </p>
      <div className="mt-6 lg:mt-8">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={90}
          infinite
          isPlaying
          interval={4000}
          totalSlides={sponsors.length}
          visibleSlides={isLarge ? 4 : isMedium ? 3 : 2}
        >
          <Slider>
            {sponsors.map((_, i) => (
              <Slide index={i} key={_.id}>
                <div className="w-full h-full p-2">
                  <div className="relative w-full h-full">
                    <Image
                      src={_.staticImageData}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      alt={_.description}
                    />
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
}
