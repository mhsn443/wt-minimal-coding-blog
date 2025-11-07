"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { posts } from "@/data/posts";
import Link from "next/link";
import type { FeaturedCategory } from "@/data/featured-categories";
import BlogPost from "./blog-post";

const defaultCarouselOptions = {
  align: "start" as const,
  loop: false,
  breakpoints: {
    "(max-width: 768px)": {
      dragFree: true,
    },
  },
};

export function FeaturedPostsCarousel({
  featuredCategory,
}: {
  featuredCategory: FeaturedCategory;
}) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="mt-4">
      <div className="overflow-hidden">
        <Carousel setApi={setCarouselApi} opts={defaultCarouselOptions}>
          <CarouselContent>
            {posts
              .filter((post) =>
                post.featuredCategories?.includes(featuredCategory.name),
              )
              .slice(0, 6)
              .map((post) => (
                <CarouselItem
                  key={post.id}
                  className="pl-5 md:basis-1/2 lg:basis-1/3"
                >
                  <BlogPost post={post} />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
        {/* Arrows and "View All" button */}
        <div className="mt-2 mr-1 flex items-center justify-between">
          <div className="space-x-2 pl-1">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
          <Link
            href={featuredCategory.href}
            className="group flex items-center"
          >
            View All{" "}
            <ArrowRight className="ml-1 size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
