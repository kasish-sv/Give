"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="mx-auto w-full max-w-xs rounded-lg md:max-w-xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="border-0 p-0 m-0">
                <CardContent className="flex items-center justify-center p-0 m-0">
                  <Image
                    src={`/images/donate-img${index + 1}.webp`}
                    alt={`Image ${index + 1}`}
                    width={1200}
                    height={1000}
                    className="rounded-md object-cover p-0 m-0"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
